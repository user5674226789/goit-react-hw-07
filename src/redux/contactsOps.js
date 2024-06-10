import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

axios.defaults.baseURL = "https://66609e085425580055b4a1b9.mockapi.io";

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async() => {
    const response = await axios.get("/tasks")
})