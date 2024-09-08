import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure this is installed
import TodoList from '../components/TodoList'; // Adjust the path if needed

// Test initial render
test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

// Test adding a new todo
test('adds a new todo item', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add new todo'), {
        target: { value: 'New Task' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Task')).toBeInTheDocument();
});

// Test toggling a todo
test('toggles todo completion status', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
});

// Test deleting a todo
test('deletes a todo item', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});