export default function getTodos(state) {
  return state?.todos?.todos || [];
}
