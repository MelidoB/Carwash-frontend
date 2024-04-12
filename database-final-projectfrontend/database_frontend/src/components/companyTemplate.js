import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "../static/companyData.json";  // Assuming data is structured as shown

function EachCompanyPage({ name, imageURL }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={imageURL} alt={name} style={{ width: "100%", height: "auto" }} />
        </div>
    );
}

function IndividualCompanyPage() {
    const { companyName } = useParams();
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const selectedCompany = data.find(item => item["Company Name"] === companyName);
        setCompany(selectedCompany);
        setLoading(false);
    }, [companyName]);  // Depend on companyName to re-run this effect

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!company) {
        return <div>Company not found.</div>;
    }

    return (
        <div>
            <EachCompanyPage name={company["Company Name"]} imageURL={company["Image"]} />
        </div>
    );
}

export default IndividualCompanyPage;
