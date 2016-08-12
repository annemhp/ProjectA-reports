export class StatusCode {

    statuses = [
        { id: 'open', label: 'Open' },
        { id: 'inprogress', label: 'InProgress' },
        { id: 'resolved', label: 'Resolved' },
        { id: 'invalid', label: 'Invalid' }
    ];
    statusMap = {
        'open' :'Open',
        'inprogress' :'InProgress',
        'resolved' :'Resolved',
        'invalid' :'Invalid'
    }
}