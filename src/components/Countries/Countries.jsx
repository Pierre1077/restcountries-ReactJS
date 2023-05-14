// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "../Card/Card";
// import Search from "../Search/Search";
// import Filter from "../Filter/Filter";
// import Visited from "../Visited/Visited";
// import './countries.css'
//
//
// const Countries = ({handleCountryVisited}) => {
//     const [useData, setUseData] = useState([]);
//     const [searched, setSearched] = useState("");
//     const [checked, setChecked] = useState("");
//     const [visitedCountry, setVisitedCountry] = useState([]);
//
//     useEffect(() => {
//         axios.get("https://restcountries.com/v3.1/all").then((countries) => {
//             const dataWithVisited = countries.data.map((c) => ({ ...c, visited: false }));
//             setUseData(dataWithVisited);
//         });
//     }, []);
//
//     const handleVisitedCountry = (country) => {
//         // Mettre à jour la propriété "visited" du pays
//         const updatedData = useData.map((c) =>
//             c.name.common === country.name.common ? { ...c, visited: !c.visited } : c
//         );
//         setUseData(updatedData);
//
//         // Mettre à jour la liste des pays visités
//         const index = visitedCountry.findIndex(c => c.name.common === country.name.common);
//         if (index === -1) {
//             setVisitedCountry([...visitedCountry, country]);
//         } else {
//             const updatedVisited = visitedCountry.filter(c => c.name.common !== country.name.common);
//             setVisitedCountry(updatedVisited);
//         }
//     };
//
//
//     function handleSearch(query) {
//         setSearched(query);
//     }
//
//     function handleFilter(check) {
//         console.log(check);
//         setChecked(check);
//     }
//
//     return (
//         <div className={'all'}>
//             {/*<Visited visitedCountries={visitedCountry} />*/}
//             {useData
//                 .filter((c) => c.name.common.toLowerCase().includes(searched.toLowerCase()))
//                 .filter((c) => checked === "" || checked === "All" || c.continents.includes(checked))
//                 .map((c, index) => (
//                     <div key={index} className={'countries'}>
//                         <Card
//                             name={c.name.common}
//                             flag={c.flags.svg}
//                             flagAlt={c.flags.alt}
//                             capital={c.capital}
//                             continent={c.continents}
//                             officialName={c.name.official}
//                             visited={c.visited}
//                         />
//                         <button onClick={() => handleCountryVisited}>
//                             {c.visited ? "Visited" : "Add to visited countries"}
//                         </button>
//                     </div>
//                 ))}
//         </div>
//     );
// };
//
// export default Countries;
