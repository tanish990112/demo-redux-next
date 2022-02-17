let lastId = 0;

export default function reducer(state = 0, action) {
  switch (action.type) {
    case "addNotifications":
      return (state += 1);
    case "RemoveNotifications":
      if (state > 0) return (state -= 1);
      return state;

    default:
      return state;
  }
}
