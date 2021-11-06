import { API } from './../config';

export const addResident = async ({ name, number, email, addressId }) => {
  try {
    const addResidentRes = await fetch(`${API}/HousingStock/client`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Id: 0,
        Name: name,
        Phone: number,
        Email: email,
        BindId: 0,
      }),
    });

    if (!addResidentRes.ok) {
      throw new Error('Request for adding resident failed');
    }

    const addResidentData = await addResidentRes.json();

    if (addResidentData.result !== 'Ok') return;

    bindResident(addressId, addResidentData.id);
  } catch (err) {
    console.log(err.message);
  }
};

export const searchResidents = async ({ houseFlatId }) => {
  try {
    const clientsRes = await fetch(`${API}/HousingStock/clients?addressId=${houseFlatId}`);
    console.log(houseFlatId);

    if (!clientsRes.ok) {
      throw new Error('Request for clients failed');
    }

    const clientsData = await clientsRes.json();
    console.log(clientsData);
  } catch (err) {
    console.log(err.message);
  }
};

// Response with code 204
const bindResident = async (addressId, clientId) => {
  try {
    const bindResidentRes = await fetch(`${API}/HousingStock/bind_client`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        AddressId: +addressId,
        ClientId: +clientId,
      }),
    });

    if (!bindResidentRes.ok) {
      throw new Error('Request for binding resident to address failed');
    }
  } catch (err) {
    console.log(err.message);
  }
};
