import React, { useState } from 'react'
import Modal from 'react-modal'
import classes from './CreateBalanceModal.module.scss'
import { random } from 'faker'
import { useDispatch, useSelector } from 'react-redux'

const emptyObject = () => ({
  id: random.uuid(),
  title: '',
  subTitle: ''
})

export const CreateBalanceModal = ({ isModalOpen, toggleModal }) => {
  const dispatch = useDispatch()
  const balanceCategories = useSelector(state => state.balance)
  const [isActive, setIsActive] = useState(false)
  const isBalanceCategories = !!balanceCategories.length
  const [subCatID, setSubCatID] = useState('')
  const [formState, setFormState] = useState(emptyObject())
  const resetForm = () => {
    setFormState(emptyObject())
  }

  const inputHandler = event => {
    setFormState({
      ...formState,
      title: event.target.value,
      subTitle: []
    })
  }
  const formSubmitHandler = async event => {
    event.preventDefault()
    const formStateCopy = {
      ...formState
    }
    const response = await fetch('http://localhost:4000/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formStateCopy)
    })
    if (response.status === 201) {
      const newCategory = await response.json()
      dispatch({ type: 'ADD_NEW_CATEGORY', newCategory })
      resetForm()
      console.log(newCategory)
    }
  }
  const subCatSetter = async event => {
    event.preventDefault()
    const displayedSubCategory =
      balanceCategories.find(category => category.id === subCatID) || {}
    let temp = displayedSubCategory.subTitle.push(formState.subTitle)
    const response = await fetch(
      `http://localhost:4000/categories/${subCatID}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(displayedSubCategory)
      }
    )
    if (response.status === 201) {
      const replacedCategory = await response.json()
      // const replacedCategory = { ...displayedSubCategory }
      dispatch({ type: 'REPLACE_CATEGORY', replacedCategory })
    }
    resetForm()
  }
  const subInputHandler = event => {
    setFormState({
      ...formState,
      subTitle: event.target.value
    })
  }
  const subCatHandler = () => setIsActive(!isActive)

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      ariaHideApp={false}
      className={classes.setDimensionsModal}
    >
      <div className={classes.setDimensions}>
        <div className={classes.balanceCategories}>
          <div className={classes.categories}>
            {isBalanceCategories
              ? balanceCategories.map(category => (
                  <button
                    onClick={() => {
                      setSubCatID(category.id)
                      subCatHandler()
                    }}
                    key={category.id}
                  >
                    {category.title}
                  </button>
                ))
              : console.log('no categories')}
          </div>
          <div className={classes.subCat}>
            <div className={classes.subCategoriesContainer}>
              {isActive
                ? balanceCategories
                    .find(category => category.id === subCatID)
                    .subTitle.map(subcategory => (
                      <div key={subcategory} className={classes.element}>
                        {subcategory}
                      </div>
                    ))
                : console.log('cannot identify subcats')}
            </div>
            {isActive ? (
              <form onSubmit={subCatSetter}>
                <input
                  placeholder='Sub Category name..'
                  value={formState.subTitle}
                  onChange={event => subInputHandler(event)}
                />
                <button>Add New Sub Category</button>
              </form>
            ) : (
              console.log('category not clicked')
            )}
          </div>
        </div>
        <div className={classes.addNewCategory}>
          <form onSubmit={formSubmitHandler}>
            <input
              placeholder='Category name..'
              value={formState.title}
              onChange={event => inputHandler(event)}
            />
            <button>Submit New Category</button>
          </form>
        </div>
        <form></form>
      </div>
    </Modal>
  )
}
