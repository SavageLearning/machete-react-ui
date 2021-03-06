import MaterialTable from 'material-table';
import React, { FunctionComponent, useState, useEffect } from 'react';
import * as client from '../../machete-api-axios-client/';
import {Configuration, EmployersList } from '../../machete-api-axios-client';
import globalAxios from 'axios';
import { Button } from '@material-ui/core';

// const getEmployers = (state: any) => { 
//   return state.entities.employers; 
// }

// const employersRequest: TypedQueryConfig<{ employers: EmployersList[]}, EmployersList[]> = {
//   transform: (body: any) => ({ employers: body}),
//   update : {
//     employers: (oldValue: EmployersList[], newValue: EmployersList[]): EmployersList[] =>  newValue
//   }
// }
//const basePath = 'http://localhost:4213';
const options = { headers: { 
  'Content-type': 'application/json',
  'Accept': 'application/json'
}};
// const config: Configuration = {
//   baseOptions: options
// }
const getEmployersList = client.EmployersApiFp().apiEmployersGet(10,0, options);

export const EmployerTable: FunctionComponent = () => {
//   const [{ isPending }] = useRequest(client.EmployersApiFp({}, employersRequest));
//   const employers = useSelector(getEmployers) || [];
    useEffect(() => {
        getEmployersList().then(response => {
          console.log(response);
         setEmployers(response.data);
        }).catch(error => {
          console.log(error);
        });
    }, []);
    //const [selectedRow, setSelectedRow] = useState();
    //const [showDialog, setShowDialog] = useState(false);
    const [employers, setEmployers] = useState<EmployersList[]>({} as EmployersList[]);

  

  return (
    // <MaterialTable
    //     // other props
    //     title={'Employers'}
    //     data={employers}
    //     columns={[
    //       {title: 'Id', field: 'ID'},
    //       {title: 'Name', field: 'name'},
    //       {title: 'Address', field: 'address1'},
    //       {title: 'City', field: 'city'},
    //       {title: 'Phone', field: 'phone'},
    //       {title: 'Zipcode', field: 'zipcode'}
    //     ]}
    // />
    <Button color="primary">Hello World</Button>
  );
}

// fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
// JCii: Axios has hardcoded behavior around the existence or absence of a property.
//       The OpenAPI template generates code that deletes said property, which 
//       throws TS2790 in TS4+
// Links: https://stackoverflow.com/questions/63702057/what-is-the-logic-behind-error-the-operand-of-a-delete-operator-must-be-opti
//        https://stackoverflow.com/questions/7517332/node-js-url-parse-result-back-to-string/7517673#7517673
//        https://stackoverflow.com/questions/34880522/mute-ignore-ts2307-error-from-typescript-tsc/51797689#51797689
