import  {render, screen} from "@testing-library/react";
import Contact from '../Contact';
import"@testing-library/jest-dom";


test("should load contact us component" , ()=>{
    // render it on js dom
    render(<Contact/>);
    const heading = screen.getByRole("heading")
    //Assertion
    expect(heading).toBeInTheDocument();
});

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

test("should load 2 input boxes on contact us component" , ()=>{
    render(<Contact/>);
    // const button = screen.getByRole("button")
    const inputBoxes = screen.getAllByRole('textbox')// it gives array form
    //Assertion
    expect(inputBoxes.length).toBe(2); // OR expect(inputBoxes.length).not.toBe(3 );
})

// group your test cases inside  a describe

describe("Contact Us PAge Test Case grouped", ()=>{
    beforeEach(()=>{
        console.log("before each inside")
    })
    test("should load input inside contact us component" , ()=>{
        render(<Contact/>);
        // const button = screen.getByRole("button")
        const placeholder = screen.getByPlaceholderText("name")
        //Assertion
        expect(placeholder).toBeInTheDocument();
    })
    // instead of test we can write it also
    it("should load 2 input boxes on contact us component" , ()=>{
        render(<Contact/>);
        // const button = screen.getByRole("button")
        const inputBoxes = screen.getAllByRole('textbox')// it gives array form
        //Assertion
        expect(inputBoxes.length).toBe(2); // OR expect(inputBoxes.length).not.toBe(3 );
    })
})

beforeAll(()=>{
    console.log("hvgv")
})

beforeEach(()=>{
    console.log("before each")
})

