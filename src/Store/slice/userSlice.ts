import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ref, child, get } from "firebase/database";
import { db } from "../../firebase/config";
import { AppDispatch } from "../store";

export enum ActionType {
    ORDERTICKER = "Orderticker",
    CREATECONTACT = "CreateContact"
}

export interface Customer {
    Name: string,
    Phone: number,
    id: string,
    email: string,
    quantity: number,
    Date: Date,
    package: string

}

export interface Contact {
    Name: string;
    Phone: number;
    email: string;
    address: string;
    message: string;
}

export interface CustomerState {
    Customer: Contact[];
    status: "Loading" | "failed" | "succeeded" | 'idle';
    error: string | null;
}

const initialState: CustomerState = {
    Customer: [],
    status: 'idle',
    error: null,
};

// interface PostState {
//     loading: boolean;
//     error: string | null;
//     data: Customer[] | null;
// }

// const initialState: PostState = {
//     loading: false,
//     error: null,
//     data: [],
// };

//db
const dbRef = ref(db);

//fetch customer
// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//     get(child(dbRef, `users`)).then((response) => {
//         if (response.exists()) {
//             console.log(response.val())
//             return response.val()
//         }
//     })
// });

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await db.ref('todos').once('value');
    return response.val();
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo: Omit<Contact, 'id'>) => {
    const newTodoRef = db.ref('todos').push();
    await newTodoRef.set(todo);
    return { ...todo, id: newTodoRef.key! };
});


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // createUses(state, action: PayloadAction<Customer[]>) {
        //     console.log(action)
        //     state.data = action.payload
        //     state.loading = false

        // }
        
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, state => {
                state.status = 'Loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.Customer = action.payload ? Object.values(action.payload) : [];
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.Customer.push(action.payload);
            })
        // .addCase(removeTodo.fulfilled, (state, action) => {
        //     state.todos = state.todos.filter(todo => todo.id !== action.payload);
        // })
        // .addCase(toggleTodo.fulfilled, (state, action) => {
        //     const todo = state.todos.find(todo => todo.id === action.payload);
        //     if (todo) {
        //         todo.completed = !todo.completed;
        //     }
        // })
        // .addCase(editTodo.fulfilled, (state, action) => {
        //     const todo = state.todos.find(todo => todo.id === action.payload.id);
        //     if (todo) {
        //         todo.title = action.payload.title;
        //     }
    }
});

// export const { createUses } = userSlice.actions
export default userSlice.reducer;

