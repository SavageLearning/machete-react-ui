import MaterialTable from 'material-table';
import React, { FunctionComponent, useState } from 'react';
import * as client from 'machete-api-axios-client';
import {EmployersList } from 'machete-api-axios-client';

const getEmployers = (state: any) => { 
  return state.entities.employers; 
}

const employersRequest: TypedQueryConfig<{ employers: EmployersList[]}, EmployersList[]> = {
  transform: (body: any) => ({ employers: body}),
  update: {
    employers: (oldValue: EmployersList[], newValue: EmployersList[]): EmployersList[] =>  newValue
  }
}


export const EmployerTable: FunctionComponent = () => {
  const [{ isPending }] = useRequest(client.EmployersApiFp({}, employersRequest));
  const employers = useSelector(getEmployers) || [];
  const [selectedRow, setSelectedRow] = useState();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <MaterialTable
        // other props
        title={'Employers'}
        data={employers}
        columns={[
          {title: 'Id', field: 'ID'},
          {title: 'Name', field: 'name'},
          {title: 'Address', field: 'address1'},
          {title: 'City', field: 'city'},
          {title: 'Phone', field: 'phone'},
          {title: 'Zipcode', field: 'zipcode'}
        ]}
    />
  );
}