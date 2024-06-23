import {render, screen} from "@testing-library/react";
import RestrauntCard from "../RestrauntCard";
import Body from '../Body';
import MOCK_DATA from "../mocks/resCardMock.json"; 
import "@testing-library/jest-dom";

const mockData = MOCK_DATA[0].info;

it("should render Restraunt Card component with props data",()=>{
    render(<RestrauntCard name={mockData.name}
        cloudinaryImageId={mockData.cloudinaryImageId}
        avgRating={mockData.avgRating}
        cuisines={mockData.cuisines}
        areaName={mockData.areaName}
        id={mockData.id}/>);
    // render(<RestrauntCard resData = {MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument("Pizza Hut");
})