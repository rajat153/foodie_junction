import  {render, screen} from "@testing-library/react";
import Contact from '../Contact';
import"@testing-library/jest-dom";


test("should load contact us component" , ()=>{


    render(<Contact/>);

    const heading = screen.getByRole("heading")

    //Assertion
    expect(heading).toBeInTheDocument();
})

// check button is present or not
test("should load button inside contact us component" , ()=>{

    render(<Contact/>);

    // const button = screen.getByRole("button")
    const button = screen.getByText("Submit")

    //Assertion
       expect(button).toBeInTheDocument();
})

test("should load input inside contact us component" , ()=>{

    render(<Contact/>);

    // const button = screen.getByRole("button")
    const placeholder = screen.getByPlaceholderText("name")

    //Assertion
       expect(placeholder).toBeInTheDocument();
})

