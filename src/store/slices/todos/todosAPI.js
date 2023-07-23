import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030/'}),
    tagTypes: ['Todos'],
    endpoints: (build)=>({
        getTodos: build.query({
            query: (filterInfo = '')=> `todos?${filterInfo && 'completed=' + filterInfo}`,
            providesTags: (result) =>
            result
              ? [...result.map(({ id }) => ({ type: 'Todos', id })),
              {type: 'Todos', id: 'LIST'}
            ]
              : [{type: 'Todos', id: 'LIST'}],
        }),
        addTodo: build.mutation({
            query: (title) => ({
                url: 'todos',
                method: 'POST',
                body: {
                    completed: false,
                    title
                },
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        }),
        delTodo: build.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        }),
        checkTodo: build.mutation({
            query: (body) =>  ({
                url: `todos/${body.id}`,
                method: 'PATCH',
                body: {
                    ...body,
                    completed: !body.completed
                }
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        })
    })
})



export const {useGetTodosQuery, useAddTodoMutation, useDelTodoMutation, useCheckTodoMutation} = todosApi

export const todosReducer = todosApi.reducer