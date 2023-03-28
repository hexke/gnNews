import { fireEvent, render, screen } from "@testing-library/react";
import Filter from "../../../components/Filter/Filter";

describe("Filter component", () => {
    const mockValue = "abc";
    const mockFn = jest.fn((value: string): string => value);

    beforeEach(() => {
        render(<Filter onInput={mockFn} />);
    });

    it("should change input value on input event fired", () => {
        const input = screen.getByTestId("search-country") as HTMLInputElement;

        fireEvent.change(input, { target: { value: mockValue } });

        expect(input.value).toBe(mockValue);
    });

    it("should invoke callback on input event fired", () => {
        const input = screen.getByTestId("search-country") as HTMLInputElement;

        fireEvent.input(input, { target: { value: mockValue } });

        expect(mockFn).toBeCalled();
    });
});