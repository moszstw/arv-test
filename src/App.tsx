// Create project by create react app with typescript template
//
// 1. Render user list
//  - get json data from "https://random-data-api.com/api/users/random_user?size=5"
//  - create a list component
//  - display user list by showing user_name, first_name and last_name
// 2. Create fetch more button
//  - add new data to list when click "fetch more" button
// 3. Create a search input box, which search by user_name, first_name and last_name
//  - display filtered user list by a search input box data
// 4. Unintentional renders
//  - create a user component for displaying more information eg. address
//  - create event on click user component to select username to render on top
//  - make sure a user component does not re-render on search
//  - make sure a list does not re-render on click a user component
// 5. Create router for page switching
//  - implement lazy load on route

import Routing from "./components/Routing";

function App() {
    return <Routing />;
}

export default App;
