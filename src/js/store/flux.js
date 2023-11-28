const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/* YOUR "GLOBAL" STATES HERE! */
			agendas: [],
			currentUser: "",
			contacts: [],
		},
		actions: {
			// Get all users (agenda_slugs).
			loadAgendas: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
				.then(response => response.json())
				.then(users => setStore( { "agendas": users } ));
			},

			setUser: (user) => {
				setStore( {"currentUser": user} );
				getActions().loadContacts(user)
			},

			// Load contacts for current user.
			loadContacts: (currentUser) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${currentUser}`)
				.then(response => response.json())
				.then(contactList => setStore(  {"contacts": [...contactList]}  ));
			},

			// Add new contact to currentUser's contacts.
			addContact: (newContact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact`, {
					method: "POST",
					body: JSON.stringify({
						"full_name": newContact.fullName,
						"email": newContact.email,
						"agenda_slug": newContact.user,
						"address": newContact.address,
						"phone": newContact.phone
					}),

					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(response => response.json())
				.then(data => {
					getActions().loadContacts(getStore().currentUser)
				})
			},

			// Delete a contact from user's list.
			deleteContact: (contactId) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(response => response.json())
				.then(data => {
					getActions().loadContacts(getStore().currentUser)
				})				
			},

			// Edit a contact from user's list.
			editContact: (contact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					body: JSON.stringify({
						"full_name": contact.fullName,
						"email": contact.email,
						"agenda_slug": contact.user,
						"address": contact.address,
						"phone": contact.phone
					}),

					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(response => response.json())
				.then(data => {
					getActions().loadContacts(getStore().currentUser)
				})				
			},
			selectAgenda:(el)=>{
				setStore({agenda:el})
				let { agenda } = getStore()
				console.log("LA AGENDA ES" + agenda )
			  },
		}
	};
};

export default getState;
