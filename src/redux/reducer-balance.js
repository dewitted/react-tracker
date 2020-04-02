export default (state = [], action) => {
  switch (action.type) {
    case 'UPLOAD_CATEGORIES':
      return action.categories
    case 'ADD_NEW_CATEGORY':
      return [...state, action.newCategory]
    case 'REPLACE_CATEGORY':
      return [...state, action.replacedCategory]
    default:
      return state
  }
}
