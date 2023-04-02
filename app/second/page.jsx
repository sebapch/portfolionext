async function getData() {
    // Get the total number of people
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json();
    const total = data.count;
  
    // Get a random person
    const index = Math.floor(Math.random() * total) + 1;
    const res2 = await fetch(`https://swapi.dev/api/people/${index}`);
    const data2 = await res2.json();
  
    return data2;
  }
  
  export default async function Page() {
    const data = await getData();
    console.log(data)
    const randomPerson =  data.name;
    return (
      <p>
        {randomPerson}
      </p>
    );
  }