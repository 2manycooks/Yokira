import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProfileEditForm(props) {
  const [username,setUsername] = useState(props.username);

    return (
      <form onSubmit={e => props.handle_edit(e, {username})}>
          
      </form>
    );
  }


export default ProfileEditForm;

ProfileEditForm.propTypes = {
  handle_edit: PropTypes.func.isRequired
};