export const getNotes = () => {
  return fetch('https://derin-notes-backend.herokuapp.com/api/v1/notes')
    .then(res =>([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get notes';
      return json;
    })
    .then(json => {
      return json;
    });
};

export const postNote = note => {
  return fetch('https://derin-notes-backend.herokuapp.com/api/v1/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get note';
      return json;
    });
};

export const removeNote = id => {
  return fetch(`https://derin-notes-backend.herokuapp.com/api/v1/notes/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to delete note';
      return json;
    });
};
