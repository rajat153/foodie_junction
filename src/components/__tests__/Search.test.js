import {fireEvent, render,screen} from "@testing-library/react";
import Body from '../Body';
import MOCK_DATA from '.././mocks/mockResListData.json'
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



global.fetch =  jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("should search res list for pizza text input", async()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
        
        )
    });
    const cardsbeforeSearch =  screen.getAllByTestId("resCard");
    expect(cardsbeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole('button', {name : "Search"})
    const searchInput = screen.getByTestId("searchinput");
    fireEvent.change( searchInput, {target : {value : "pizza"}});
    fireEvent.click(searchBtn);
    expect(searchBtn).toBeInTheDocument();
    //sceen should load 3 res cards

    const cardsafterSearch = screen.getAllByTestId("resCard");
    expect(cardsafterSearch.length).toBe(3);
})
it("should render top rating restraunt button and cards" , async()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
        )
    });

    const topRatedRestrauntBtn = screen.getByRole('button', {name:'Top Rated Restraunts'});
    expect(topRatedRestrauntBtn).toBeInTheDocument(); // test button is present or not
    fireEvent.click(topRatedRestrauntBtn);
    const cardsafterclickTopRatedRestrnt = screen.getAllByTestId("resCard");
    expect(cardsafterclickTopRatedRestrnt.length).toBe(4);
})