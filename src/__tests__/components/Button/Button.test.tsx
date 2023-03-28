import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../../../components/Button/Button";

describe("Button Component", () => {
    const mockLabel = "button label";
    const mockFn = jest.fn();

    beforeEach(() => {
        render(<Button onClick={mockFn}>{mockLabel}</Button>);
    });

    it("Should render label", () => {
        const button = screen.getByText(mockLabel);

        expect(button).toBeTruthy();
    });

    it("Should invoke callback function on click", () => {
        const button = screen.getByText(mockLabel);

        fireEvent.click(button);

        expect(mockFn).toBeCalled();
    });
});