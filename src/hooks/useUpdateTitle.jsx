export const useUpdateTitle = () => {
  const updateTitle = (newTitle) => {
    if (newTitle ==="") return document.title = `Snippets`
    document.title = `Snippets | ${newTitle}`
  }
  return updateTitle
}
