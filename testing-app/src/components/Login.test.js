    import { render, screen } from "@testing-library/react";
    import Login from "./Login";
    import userEvent from "@testing-library/user-event";

    test('check if button is disabled if the form is empty' , async () => {
        render(<Login />);
        expect(screen.getByRole('button' , {name : /submit/i})).toBeDisabled();
    });

    test('check if button is disabled if name is empty' , async () => {
        render(<Login />);
        
        const nameInp = screen.getByPlaceholderText(/name/i);

        await userEvent.type(nameInp , "Chan");
        expect(screen.getByRole('button' , {name : /submit/i})).toBeDisabled();
    });

    test('check if button is disabled if emai is empty' , async () => {
        render(<Login />);
        
        const emailInp = screen.getByPlaceholderText(/email/i);

        await userEvent.type(emailInp , "chanminswe@gmail.com");
        expect(screen.getByRole('button' , {name : /submit/i})).toBeDisabled();
    });

    test('to check if button is enabled if the forms are filled' , async() => {
        render(<Login />);
        
        const nameInp = screen.getByPlaceholderText(/name/i);
        const emailInp = screen.getByPlaceholderText(/email/i);

        await userEvent.type(nameInp , 'chanminswe');
        await userEvent.type(emailInp , 'chan@gmail.com');

        const submitBtn = screen.getByRole('button' , {name : /submit/i});
        expect(submitBtn).toBeEnabled();
    })


