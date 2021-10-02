export const transObject = {
    id: "objectId",
    user: {
        id:         "userId",
        firstName:  "user first Name",
        lastName: "user last Name",
        facebookId: "facebook Id",
        googleId: "google Id",
        mobile: "User Phone number",
        accessToke: "JWT access token",
        userType: {
            id: "userTypeId",
            name: "User Type name",
            description: "User Type Description"
        },
        address: [{
            id: "location model Id",
            coordinates: {
                latitude: "geolocation",
                longitude: "geolocation",
            },
            street: "street address",
            barangay: "Barangay details",
            city: "City Address",
            province: "Province details",
            region: "Region ",
            zipCode: "zipCode",
            country: "country default PH",
            isDeleted: "Boolean",
            isDefault: "Boolean",
            name: "Location Name"
        }],
    },
    vendor: {
        
    },
    transaction: {
        id: "transaction Id",
        code: "transaction code short name",
        status: "DRAFT / BOOKED / APPROVED / PICKEDUP / ONPROCESS / RFP / DELIVIRING / CONFIRM / CANCELED",
        payload: {
            
        },
        payment: {
            isPaid: "Boolean"
        },
        createdAt: "Date",
        updatedAt: "Date"
    },
    createdAt: "Date",
    updatedAt: "Date"    
}