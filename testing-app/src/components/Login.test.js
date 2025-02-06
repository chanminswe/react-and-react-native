import { render , screen } from "@testing-library/react"
import Login from "./Login"
import userEvent from "@testing-library/user-event";

test('UI should have 2 Inputs and 1 Button' , () => {
    render(<Login />);

    const nameNode = screen.getByPlaceholderText('name');
    const emailNode = screen.getByPlaceholderText('email');
    const button = screen.getByRole('button' , {name : /submit/i});

    expect(nameNode).toBeInTheDocument();
    expect(emailNode).toBeInTheDocument();
    expect(button).toBeInTheDocument();
})

test('making sure input buttons work' , async () => {
    render(<Login />);

    const userInp = screen.getByPlaceholderText('name');
    const emailInp = screen.getByPlaceholderText('email');

    await userEvent.type(userInp , "Chan Min");
    await userEvent.type(emailInp , 'chan@gmail.com');

    expect(userInp).toHaveValue('Chan Min');
    expect(emailInp).toHaveValue('chan@gmail.com');
});

test('to make sure submit button worked' , async() => {

});

