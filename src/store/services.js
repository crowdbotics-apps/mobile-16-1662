import axios from "axios"
import {} from "react-native-dotenv"
const newPlugin100 = axios.create({
  baseURL:
    "https://screen-editor-review.herokuapp.com/dashboard/app/1662/storyboard/234/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
