import { useState } from "react";
import { cn } from "./utils/cn";

const categories: string[] = [
  "All",
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Pineapple",
  "Strawberry",
  "Dates",
];

interface DataItem {
  id: number;
  name: string;
  category: string;
  price: number;
}

const data: DataItem[] = [
  {
    id: 1,
    name: "Apple",
    category: "apple",
    price: 10,
  },
  {
    id: 2,
    name: "Banana",
    category: "banana",
    price: 20,
  },
  {
    id: 3,
    name: "Orange",
    category: "orange",
    price: 30,
  },
  {
    id: 4,
    name: "Grapes",
    category: "grapes",
    price: 40,
  },
  {
    id: 5,
    name: "Pineapple",
    category: "pineapple",
    price: 50,
  },
  {
    id: 6,
    name: "Strawberry",
    category: "strawberry",
    price: 60,
  },
  {
    id: 7,
    name: "Dates",
    category: "dates",
    price: 70,
  },
];

function App() {
  const [filter, setFilter] = useState<string>("all");

  const onCategoryClick = (event: React.MouseEvent<HTMLUListElement>): void => {
    if (event.target instanceof HTMLLIElement) {
      setFilter(event.target.innerText.toLowerCase());
    }
  };

  const filterData = data.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <main className="p-10 flex flex-col gap-10">
      <nav className="flex justify-center">
        <ul
          className="flex space-x-4"
          onClick={(e) => onCategoryClick(e)}
        >
          {categories.map((category) => (
            <li
              className={cn(
                "px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer",
                {
                  "bg-indigo-400 hover:bg-indigo-500":
                    category.toLowerCase() === filter,
                }
              )}
              key={category}
            >
              {category}
            </li>
          ))}
          <li className="flex items-center">
            <button
              className="px-3 py-1 bg-gray-200 rounded-full hover:bg-red-500 cursor-pointer"
              onClick={() => setFilter("all")}
            >
              x
            </button>
          </li>
        </ul>
      </nav>
      <section>
        {filterData.map((item) => (
          <div
            className="p-4 my-2 flex  justify-center items-center bg-gray-200 rounded-md w-1/4 mx-auto gap-2"
            key={item.id}
          >
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
