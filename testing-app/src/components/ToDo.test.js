import { render , screen } from "@testing-library/react"
import ToDo from "./ToDo"
import userEvent from "@testing-library/user-event";

test('to check if button is diabled when the input is empty' , () => {
    render(<ToDo />);
    const btn = screen.getByRole('button' , {name : /Add Task/i});
    expect(btn).toBeDisabled();
})

test('if button enabled when the user entered something' , async () => {
    render(<ToDo />);

    const task = screen.getByPlaceholderText('task');
    const btn = screen.getByRole('button' , {name : /Add Task/i});

    await userEvent.type(task , "do the dishes");

    expect(btn).toBeEnabled();
});

