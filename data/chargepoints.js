const CP = [
    {
        name: '100001',
        user: '100001',
        pass: '100001',
        connectorId: 1,
        props: {
            chargePointSerialNumber: 'CP1',
            chargePointVendor: 'FutureCP',
            chargePointModel: 'm1',
            chargeBoxSerialNumber: 'CP1BOX1',
            firmwareVersion: '1.0.0'
        },
        configurationKey: [
            {
                key: 'ChargeProfileMaxStackLevel',
                readonly: true,
                value: 5
            },
            {
                key: 'ChargingScheduleAllowedChargingRateUnit',
                readonly: true,
                value: ['Current', 'Power']
            }
        ],
        ratings: {
            amp: 30,
            voltage: 208
        }
    },
    {
        name: '100002',
        user: '100002',
        pass: '100002',
        connectorId: 1,
        props: {
            chargePointSerialNumber: 'CP2',
            chargePointVendor: 'FutureCP',
            chargePointModel: 'm1',
            chargeBoxSerialNumber: 'CP2BOX1',
            firmwareVersion: '1.0.0'
        },
        configurationKey: [
            {
                key: 'ChargeProfileMaxStackLevel',
                readonly: true,
                value: 5
            },
            {
                key: 'ChargingScheduleAllowedChargingRateUnit',
                readonly: true,
                value: ['Current', 'Power']
            }
        ],
        ratings: {
            amp: 30,
            voltage: 208
        }
    },
    {
        name: '100003',
        user: '100003',
        pass: '100003',
        connectorId: 1,
        props: {
            chargePointSerialNumber: 'CP2',
            chargePointVendor: 'FutureCP',
            chargePointModel: 'm1',
            chargeBoxSerialNumber: 'CP2BOX1',
            firmwareVersion: '1.0.0'
        },
        configurationKey: [
            {
                key: 'ChargeProfileMaxStackLevel',
                readonly: true,
                value: 5
            },
            {
                key: 'ChargingScheduleAllowedChargingRateUnit',
                readonly: true,
                value: ['Current', 'Power']
            }
        ],
        ratings: {
            amp: 260,
            voltage: 380
        }
    },
    {
        name: '100003',
        user: '100003',
        pass: '100003',
        connectorId: 2,
        props: {
            chargePointSerialNumber: 'CP2',
            chargePointVendor: 'FutureCP',
            chargePointModel: 'm1',
            chargeBoxSerialNumber: 'CP2BOX1',
            firmwareVersion: '1.0.0'
        },
        configurationKey: [
            {
                key: 'ChargeProfileMaxStackLevel',
                readonly: true,
                value: 5
            },
            {
                key: 'ChargingScheduleAllowedChargingRateUnit',
                readonly: true,
                value: ['Current', 'Power']
            }
        ],
        ratings: {
            amp: 260,
            voltage: 380
        }
    }
];

module.exports = CP;
