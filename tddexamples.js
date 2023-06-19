//try this in my randomquote generator code
//search quote
describe("searchQuote", () => {
    it("returns quotes containing the specified keyword", async () => {
      const keyword = "inspiration";
      const searchResults = await searchQuote(keyword);
      expect(searchResults).toHaveLength(3); // Assuming three search results for the keyword
      expect(searchResults[0].content).toContain(keyword);
      expect(searchResults[1].content).toContain(keyword);
      expect(searchResults[2].content).toContain(keyword);
    });
  });

  //sumNumbers(a, b)
  describe("sumNumbers", () => {
    it("returns the sum of two numbers", () => {
      expect(sumNumbers(5, 10)).toBe(15);
      expect(sumNumbers(-3, 8)).toBe(5);
      expect(sumNumbers(-6, -4)).toBe(-10);
    });
  });
  

  
//   describe("getRandomColor", () => {
//     it("returns a color from the predefined array", () => {
//       const randomColor = getRandomColor();
//       const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ffff00", "#00ffff"];
//       expect(colors).toContain(randomColor);
//     });
//   });

  //Capitalization
  describe("capitalizeString", () => {
    it("capitalizes the first letter of a word", () => {
      expect(capitalizeString("hello")).toBe("Hello");
      expect(capitalizeString("world")).toBe("World");
    });
  
    it("does not change the string if the first letter is already capitalized", () => {
      expect(capitalizeString("World")).toBe("World");
      expect(capitalizeString("JavaScript")).toBe("JavaScript");
    });
  });
  
  