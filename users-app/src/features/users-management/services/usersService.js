export async function getUsers() {

    /*return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .catch(err => console.log(err));*/

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        return response.json();
    } catch (error) {
        console.debug(error);
        return [];
    }

}