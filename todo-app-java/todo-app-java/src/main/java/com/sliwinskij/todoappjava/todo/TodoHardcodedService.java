package com.sliwinskij.todoappjava.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();

    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter,"username","Learn to Dance", new Date(),false));
        todos.add(new Todo(++idCounter,"username","Learn about Angular", new Date(),false));
        todos.add(new Todo(++idCounter,"username","Learn to something", new Date(),false));
    }

    public List<Todo> findAll() {
        return todos;
    }
}
