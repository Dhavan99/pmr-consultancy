const products = [
    {
        "title": "AI-Based Disease Prediction System",
        "description": "A machine learning project that predicts multiple diseases based on patient symptoms. Includes a web interface built with Flask.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 1500,
        "features": [
            "Python Source Code",
            "Flask Web App",
            "40-page Project Report",
            "PPT Presentation",
            "Dataset Included"
        ],
        "id": "p1"
    },
    {
        "title": "IoT Smart Home Controller",
        "description": "An Internet of Things project to control home appliances using an ESP32 microcontroller and a custom Android application.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2000,
        "features": [
            "Arduino/ESP32 Code",
            "Android App Source",
            "Circuit Diagram",
            "50-page Report",
            "PPT Presentation"
        ],
        "id": "p2"
    },
    {
        "id": "p3",
        "title": "SaaS Billing Platform via GraphQL",
        "description": "An innovative approach to saas billing platform designed specifically for MTech students, architected with GraphQL.",
        "degree": "MTech",
        "domain": "Web",
        "price": 4480,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p4",
        "title": "Advanced E-Commerce Platform using Django & React",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive E-Commerce Platform system using Django & React.",
        "degree": "BTech",
        "domain": "Web",
        "price": 2050,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p5",
        "title": "DeFi Lending Protocol via Ethereum",
        "description": "This project demonstrates distributed concepts in Blockchain by building a robust DeFi Lending Protocol with Ethereum.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4780,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p6",
        "title": "Automated Disease Prediction using NLP",
        "description": "A cutting-edge implementation of Disease Prediction utilizing the power of NLP. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 1400,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p7",
        "title": "Secure Decentralized File Storage using Ethereum",
        "description": "This project demonstrates secure concepts in Blockchain by building a robust Decentralized File Storage with Ethereum.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1240,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p8",
        "title": "Advanced Smart Contract Audit Tool using Web3.js",
        "description": "An innovative approach to smart contract audit tool designed specifically for MTech students, architected with Web3.js.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4030,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p9",
        "title": "Zero Trust Architecture-based Phishing Email Classifier",
        "description": "Explore the intersection of modern engineering and Cybersecurity through this comprehensive Phishing Email Classifier system using Zero Trust Architecture.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 3810,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p10",
        "title": "Distributed Real-time Collaboration Tool using React & Node.js",
        "description": "This project demonstrates distributed concepts in Web by building a robust Real-time Collaboration Tool with React & Node.js.",
        "degree": "BTech",
        "domain": "Web",
        "price": 2340,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p11",
        "title": "Automated Smart Contract Audit Tool using Polygon",
        "description": "Explore the intersection of modern engineering and Blockchain through this comprehensive Smart Contract Audit Tool system using Polygon.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 2500,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p12",
        "title": "Secure Medical Image Segmentation using Computer Vision",
        "description": "A cutting-edge implementation of Medical Image Segmentation utilizing the power of Computer Vision. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 2430,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p13",
        "title": "Next-Gen Solidity Architecture for E-Voting System",
        "description": "Explore the intersection of modern engineering and Blockchain through this comprehensive E-Voting System system using Solidity.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 2460,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p14",
        "title": "Ransomware Detection via Cryptography",
        "description": "This project demonstrates distributed concepts in Cybersecurity by building a robust Ransomware Detection with Cryptography.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1210,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p15",
        "title": "Serverless-based Online Learning Management System",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Online Learning Management System system using Serverless.",
        "degree": "BTech",
        "domain": "Web",
        "price": 2500,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p16",
        "title": "Advanced Disease Prediction using Federated Learning",
        "description": "Explore the intersection of modern engineering and AI/ML through this comprehensive Disease Prediction system using Federated Learning.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 2420,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p17",
        "title": "Decentralized File Storage via IPFS",
        "description": "Explore the intersection of modern engineering and Blockchain through this comprehensive Decentralized File Storage system using IPFS.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4770,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p18",
        "title": "Serverless-based Telemedicine Portal",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Telemedicine Portal system using Serverless.",
        "degree": "MTech",
        "domain": "Web",
        "price": 3920,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p19",
        "title": "Decentralized MQTT Architecture for Environmental Monitoring",
        "description": "A cutting-edge implementation of Environmental Monitoring utilizing the power of MQTT. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "IoT",
        "price": 4250,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p20",
        "title": "Ethereum-based Smart Contract Audit Tool",
        "description": "This project demonstrates intelligent concepts in Blockchain by building a robust Smart Contract Audit Tool with Ethereum.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4500,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p21",
        "title": "Advanced Cryptography Architecture for Blockchain-based Authentication",
        "description": "This project demonstrates advanced concepts in Cybersecurity by building a robust Blockchain-based Authentication with Cryptography.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 2770,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p22",
        "title": "Advanced Serverless Architecture for E-Commerce Platform",
        "description": "An innovative approach to e-commerce platform designed specifically for BTech students, architected with Serverless.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1630,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p23",
        "title": "LoRaWAN-based Smart Parking",
        "description": "This project demonstrates secure concepts in IoT by building a robust Smart Parking with LoRaWAN.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 1320,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p24",
        "title": "ESP32-based Patient Health Monitoring",
        "description": "An innovative approach to patient health monitoring designed specifically for MTech students, architected with ESP32.",
        "degree": "MTech",
        "domain": "IoT",
        "price": 4690,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p25",
        "title": "E-Voting System via Solidity",
        "description": "An innovative approach to e-voting system designed specifically for MTech students, architected with Solidity.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 3620,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p26",
        "title": "Next.js & Supabase-based SaaS Billing Platform",
        "description": "An innovative approach to saas billing platform designed specifically for MTech students, architected with Next.js & Supabase.",
        "degree": "MTech",
        "domain": "Web",
        "price": 3110,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p27",
        "title": "Autonomous Navigation via Deep Learning",
        "description": "An innovative approach to autonomous navigation designed specifically for BTech students, architected with Deep Learning.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 1370,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p28",
        "title": "Distributed Medical Image Segmentation using NLP",
        "description": "An innovative approach to medical image segmentation designed specifically for BTech students, architected with NLP.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 2270,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p29",
        "title": "E-Commerce Platform via Next.js & Supabase",
        "description": "This project demonstrates advanced concepts in Web by building a robust E-Commerce Platform with Next.js & Supabase.",
        "degree": "MTech",
        "domain": "Web",
        "price": 4610,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p30",
        "title": "E-Commerce Platform via Serverless",
        "description": "An innovative approach to e-commerce platform designed specifically for BTech students, architected with Serverless.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1230,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p31",
        "title": "Federated Learning-based Fraud Detection",
        "description": "This project demonstrates cutting-edge concepts in AI/ML by building a robust Fraud Detection with Federated Learning.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 3120,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p32",
        "title": "Hyperledger Fabric-based NFT Marketplace",
        "description": "This project demonstrates distributed concepts in Blockchain by building a robust NFT Marketplace with Hyperledger Fabric.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1370,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p33",
        "title": "Ransomware Detection via Zero Trust Architecture",
        "description": "This project demonstrates intelligent concepts in Cybersecurity by building a robust Ransomware Detection with Zero Trust Architecture.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 4660,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p34",
        "title": "Environmental Monitoring via ESP32",
        "description": "A cutting-edge implementation of Environmental Monitoring utilizing the power of ESP32. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "IoT",
        "price": 3190,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p35",
        "title": "Next-Gen E-Commerce Platform using Next.js & Supabase",
        "description": "An innovative approach to e-commerce platform designed specifically for MTech students, architected with Next.js & Supabase.",
        "degree": "MTech",
        "domain": "Web",
        "price": 4940,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p36",
        "title": "Distributed Patient Health Monitoring using LoRaWAN",
        "description": "Explore the intersection of modern engineering and IoT through this comprehensive Patient Health Monitoring system using LoRaWAN.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2180,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p37",
        "title": "Advanced Zero Trust Architecture Architecture for Vulnerability Scanner",
        "description": "Explore the intersection of modern engineering and Cybersecurity through this comprehensive Vulnerability Scanner system using Zero Trust Architecture.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 3560,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p38",
        "title": "Scalable Solidity Architecture for Supply Chain Provenance",
        "description": "Explore the intersection of modern engineering and Blockchain through this comprehensive Supply Chain Provenance system using Solidity.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 2430,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p39",
        "title": "Supply Chain Provenance via Solidity",
        "description": "An innovative approach to supply chain provenance designed specifically for MTech students, architected with Solidity.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4860,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p40",
        "title": "Distributed Ransomware Detection using Network Forensics",
        "description": "An innovative approach to ransomware detection designed specifically for BTech students, architected with Network Forensics.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1950,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p41",
        "title": "Automated Environmental Monitoring using Raspberry Pi",
        "description": "A cutting-edge implementation of Environmental Monitoring utilizing the power of Raspberry Pi. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2390,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p42",
        "title": "Automated Solidity Architecture for Decentralized Identity Verification",
        "description": "This project demonstrates automated concepts in Blockchain by building a robust Decentralized Identity Verification with Solidity.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4570,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p43",
        "title": "Real-time NLP Architecture for Sentiment Analysis",
        "description": "A cutting-edge implementation of Sentiment Analysis utilizing the power of NLP. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 4410,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p44",
        "title": "Secure Decentralized Identity Verification using Polygon",
        "description": "A cutting-edge implementation of Decentralized Identity Verification utilizing the power of Polygon. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4420,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p45",
        "title": "Cutting-edge Generative Art using Transformers",
        "description": "A cutting-edge implementation of Generative Art utilizing the power of Transformers. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 1240,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p46",
        "title": "Next-Gen Smart Contract Audit Tool using Web3.js",
        "description": "A cutting-edge implementation of Smart Contract Audit Tool utilizing the power of Web3.js. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4360,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p47",
        "title": "Blockchain-based Authentication via Intrusion Detection",
        "description": "A cutting-edge implementation of Blockchain-based Authentication utilizing the power of Intrusion Detection. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2410,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p48",
        "title": "Next-Gen Smart Parking using Arduino",
        "description": "This project demonstrates next-gen concepts in IoT by building a robust Smart Parking with Arduino.",
        "degree": "MTech",
        "domain": "IoT",
        "price": 3190,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p49",
        "title": "Polygon-based Supply Chain Provenance",
        "description": "Explore the intersection of modern engineering and Blockchain through this comprehensive Supply Chain Provenance system using Polygon.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1630,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p50",
        "title": "Solidity-based NFT Marketplace",
        "description": "Explore the intersection of modern engineering and Blockchain through this comprehensive NFT Marketplace system using Solidity.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 3050,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p51",
        "title": "Next-Gen Next.js & Supabase Architecture for Online Learning Management System",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Online Learning Management System system using Next.js & Supabase.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1230,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p52",
        "title": "Advanced Task Management Dashboard using GraphQL",
        "description": "A cutting-edge implementation of Task Management Dashboard utilizing the power of GraphQL. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Web",
        "price": 4180,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p53",
        "title": "Advanced Web3.js Architecture for Smart Contract Audit Tool",
        "description": "A cutting-edge implementation of Smart Contract Audit Tool utilizing the power of Web3.js. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4140,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p54",
        "title": "Scalable MQTT Architecture for Patient Health Monitoring",
        "description": "This project demonstrates scalable concepts in IoT by building a robust Patient Health Monitoring with MQTT.",
        "degree": "MTech",
        "domain": "IoT",
        "price": 3300,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p55",
        "title": "Next-Gen IPFS Architecture for Decentralized File Storage",
        "description": "This project demonstrates next-gen concepts in Blockchain by building a robust Decentralized File Storage with IPFS.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 2590,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p56",
        "title": "Real-time Autonomous Navigation using NLP",
        "description": "A cutting-edge implementation of Autonomous Navigation utilizing the power of NLP. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 2940,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p57",
        "title": "Intrusion Detection-based Ransomware Detection",
        "description": "An innovative approach to ransomware detection designed specifically for BTech students, architected with Intrusion Detection.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2190,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p58",
        "title": "Arduino-based Smart Parking",
        "description": "This project demonstrates automated concepts in IoT by building a robust Smart Parking with Arduino.",
        "degree": "MTech",
        "domain": "IoT",
        "price": 2710,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p59",
        "title": "Asset Tracking via Edge Computing",
        "description": "A cutting-edge implementation of Asset Tracking utilizing the power of Edge Computing. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 1790,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p60",
        "title": "Real-time Cryptography Architecture for Phishing Email Classifier",
        "description": "An innovative approach to phishing email classifier designed specifically for MTech students, architected with Cryptography.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 3160,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p61",
        "title": "Cutting-edge Telemedicine Portal using Serverless",
        "description": "This project demonstrates cutting-edge concepts in Web by building a robust Telemedicine Portal with Serverless.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1250,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p62",
        "title": "Smart Contract Audit Tool via Hyperledger Fabric",
        "description": "An innovative approach to smart contract audit tool designed specifically for BTech students, architected with Hyperledger Fabric.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 2010,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p63",
        "title": "React & Node.js-based Event Management System",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Event Management System system using React & Node.js.",
        "degree": "MTech",
        "domain": "Web",
        "price": 3420,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p64",
        "title": "Vulnerability Scanner via Cryptography",
        "description": "This project demonstrates scalable concepts in Cybersecurity by building a robust Vulnerability Scanner with Cryptography.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2060,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p65",
        "title": "Scalable Hyperledger Fabric Architecture for NFT Marketplace",
        "description": "An innovative approach to nft marketplace designed specifically for BTech students, architected with Hyperledger Fabric.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1930,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p66",
        "title": "Blockchain-based Authentication via Network Forensics",
        "description": "An innovative approach to blockchain-based authentication designed specifically for MTech students, architected with Network Forensics.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 3960,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p67",
        "title": "Fraud Detection via Deep Learning",
        "description": "Explore the intersection of modern engineering and AI/ML through this comprehensive Fraud Detection system using Deep Learning.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 2690,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p68",
        "title": "Django & React-based Task Management Dashboard",
        "description": "A cutting-edge implementation of Task Management Dashboard utilizing the power of Django & React. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Web",
        "price": 4600,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p69",
        "title": "Decentralized Intrusion Detection Architecture for Secure Password Vault",
        "description": "An innovative approach to secure password vault designed specifically for MTech students, architected with Intrusion Detection.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 3570,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p70",
        "title": "Anomaly Detection via Federated Learning",
        "description": "Explore the intersection of modern engineering and AI/ML through this comprehensive Anomaly Detection system using Federated Learning.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 4710,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p71",
        "title": "Cryptography-based Secure Password Vault",
        "description": "A cutting-edge implementation of Secure Password Vault utilizing the power of Cryptography. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1430,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p72",
        "title": "Ethereum-based DeFi Lending Protocol",
        "description": "A cutting-edge implementation of DeFi Lending Protocol utilizing the power of Ethereum. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1670,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p73",
        "title": "Next.js & Supabase-based Online Learning Management System",
        "description": "A cutting-edge implementation of Online Learning Management System utilizing the power of Next.js & Supabase. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "Web",
        "price": 2160,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p74",
        "title": "Secure Password Vault via Intrusion Detection",
        "description": "A cutting-edge implementation of Secure Password Vault utilizing the power of Intrusion Detection. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1380,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p75",
        "title": "DeFi Lending Protocol via Hyperledger Fabric",
        "description": "A cutting-edge implementation of DeFi Lending Protocol utilizing the power of Hyperledger Fabric. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 3240,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p76",
        "title": "Real-time Fraud Detection using Transformers",
        "description": "An innovative approach to fraud detection designed specifically for MTech students, architected with Transformers.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 3110,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p77",
        "title": "Cutting-edge LoRaWAN Architecture for Smart Home Automation",
        "description": "An innovative approach to smart home automation designed specifically for BTech students, architected with LoRaWAN.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2080,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p78",
        "title": "Cutting-edge Smart Agriculture using Arduino",
        "description": "This project demonstrates cutting-edge concepts in IoT by building a robust Smart Agriculture with Arduino.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2050,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p79",
        "title": "Advanced Predictive Maintenance using NLP",
        "description": "Explore the intersection of modern engineering and AI/ML through this comprehensive Predictive Maintenance system using NLP.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 2220,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p80",
        "title": "SaaS Billing Platform via React & Node.js",
        "description": "An innovative approach to saas billing platform designed specifically for BTech students, architected with React & Node.js.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1800,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p81",
        "title": "Online Learning Management System via GraphQL",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Online Learning Management System system using GraphQL.",
        "degree": "BTech",
        "domain": "Web",
        "price": 2210,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p82",
        "title": "Distributed Network Forensics Architecture for Phishing Email Classifier",
        "description": "Explore the intersection of modern engineering and Cybersecurity through this comprehensive Phishing Email Classifier system using Network Forensics.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 3810,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p83",
        "title": "Predictive Maintenance via Computer Vision",
        "description": "A cutting-edge implementation of Predictive Maintenance utilizing the power of Computer Vision. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 4260,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p84",
        "title": "Distributed Network Traffic Analyzer using Zero Trust Architecture",
        "description": "An innovative approach to network traffic analyzer designed specifically for BTech students, architected with Zero Trust Architecture.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1380,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p85",
        "title": "Zero Trust Architecture-based Network Traffic Analyzer",
        "description": "An innovative approach to network traffic analyzer designed specifically for BTech students, architected with Zero Trust Architecture.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2350,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p86",
        "title": "Real-time SIEM Architecture for Network Traffic Analyzer",
        "description": "Explore the intersection of modern engineering and Cybersecurity through this comprehensive Network Traffic Analyzer system using SIEM.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1590,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p87",
        "title": "Next-Gen Microservices Architecture for Telemedicine Portal",
        "description": "An innovative approach to telemedicine portal designed specifically for BTech students, architected with Microservices.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1670,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p88",
        "title": "Asset Tracking via LoRaWAN",
        "description": "A cutting-edge implementation of Asset Tracking utilizing the power of LoRaWAN. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "IoT",
        "price": 2900,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p89",
        "title": "Automated Supply Chain Provenance using Hyperledger Fabric",
        "description": "An innovative approach to supply chain provenance designed specifically for MTech students, architected with Hyperledger Fabric.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 2900,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p90",
        "title": "Secure Microservices Architecture for E-Commerce Platform",
        "description": "A cutting-edge implementation of E-Commerce Platform utilizing the power of Microservices. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Web",
        "price": 3650,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p91",
        "title": "Automated NFT Marketplace using IPFS",
        "description": "An innovative approach to nft marketplace designed specifically for MTech students, architected with IPFS.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 3720,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p92",
        "title": "Automated NFT Marketplace using Hyperledger Fabric",
        "description": "An innovative approach to nft marketplace designed specifically for BTech students, architected with Hyperledger Fabric.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1590,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p93",
        "title": "Network Forensics-based Blockchain-based Authentication",
        "description": "A cutting-edge implementation of Blockchain-based Authentication utilizing the power of Network Forensics. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 4900,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p94",
        "title": "Scalable React & Node.js Architecture for Real-time Collaboration Tool",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Real-time Collaboration Tool system using React & Node.js.",
        "degree": "MTech",
        "domain": "Web",
        "price": 3980,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p95",
        "title": "Event Management System via Microservices",
        "description": "This project demonstrates distributed concepts in Web by building a robust Event Management System with Microservices.",
        "degree": "MTech",
        "domain": "Web",
        "price": 4690,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p96",
        "title": "Vulnerability Scanner via Network Forensics",
        "description": "This project demonstrates automated concepts in Cybersecurity by building a robust Vulnerability Scanner with Network Forensics.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1860,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p97",
        "title": "Smart Grid via Edge Computing",
        "description": "An innovative approach to smart grid designed specifically for BTech students, architected with Edge Computing.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 1290,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p98",
        "title": "Distributed Patient Health Monitoring using Edge Computing",
        "description": "An innovative approach to patient health monitoring designed specifically for BTech students, architected with Edge Computing.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2370,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p99",
        "title": "Polygon-based E-Voting System",
        "description": "A cutting-edge implementation of E-Voting System utilizing the power of Polygon. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4080,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p100",
        "title": "Automated LLMs Architecture for Predictive Maintenance",
        "description": "Explore the intersection of modern engineering and AI/ML through this comprehensive Predictive Maintenance system using LLMs.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 4090,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p101",
        "title": "Intelligent DeFi Lending Protocol using Solidity",
        "description": "Explore the intersection of modern engineering and Blockchain through this comprehensive DeFi Lending Protocol system using Solidity.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 3230,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p102",
        "title": "Decentralized Real-time Collaboration Tool using React & Node.js",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Real-time Collaboration Tool system using React & Node.js.",
        "degree": "MTech",
        "domain": "Web",
        "price": 3590,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p103",
        "title": "React & Node.js-based Task Management Dashboard",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Task Management Dashboard system using React & Node.js.",
        "degree": "BTech",
        "domain": "Web",
        "price": 2460,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p104",
        "title": "Network Forensics-based Vulnerability Scanner",
        "description": "This project demonstrates automated concepts in Cybersecurity by building a robust Vulnerability Scanner with Network Forensics.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2380,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p105",
        "title": "Secure IPFS Architecture for DeFi Lending Protocol",
        "description": "This project demonstrates secure concepts in Blockchain by building a robust DeFi Lending Protocol with IPFS.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1510,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p106",
        "title": "SIEM-based Secure Password Vault",
        "description": "An innovative approach to secure password vault designed specifically for BTech students, architected with SIEM.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2160,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p107",
        "title": "Automated SaaS Billing Platform using Django & React",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive SaaS Billing Platform system using Django & React.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1750,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p108",
        "title": "Solidity-based Smart Contract Audit Tool",
        "description": "Explore the intersection of modern engineering and Blockchain through this comprehensive Smart Contract Audit Tool system using Solidity.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 4910,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p109",
        "title": "Advanced Real-time Collaboration Tool using Microservices",
        "description": "A cutting-edge implementation of Real-time Collaboration Tool utilizing the power of Microservices. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Web",
        "price": 3200,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p110",
        "title": "Distributed Next.js & Supabase Architecture for Task Management Dashboard",
        "description": "An innovative approach to task management dashboard designed specifically for BTech students, architected with Next.js & Supabase.",
        "degree": "BTech",
        "domain": "Web",
        "price": 2280,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p111",
        "title": "Raspberry Pi-based Smart Grid",
        "description": "This project demonstrates cutting-edge concepts in IoT by building a robust Smart Grid with Raspberry Pi.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 1830,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p112",
        "title": "Secure Network Traffic Analyzer using SIEM",
        "description": "This project demonstrates secure concepts in Cybersecurity by building a robust Network Traffic Analyzer with SIEM.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2000,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p113",
        "title": "Decentralized Autonomous Navigation using NLP",
        "description": "Explore the intersection of modern engineering and AI/ML through this comprehensive Autonomous Navigation system using NLP.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 1400,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p114",
        "title": "E-Commerce Platform via React & Node.js",
        "description": "An innovative approach to e-commerce platform designed specifically for BTech students, architected with React & Node.js.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1650,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p115",
        "title": "Raspberry Pi-based Environmental Monitoring",
        "description": "A cutting-edge implementation of Environmental Monitoring utilizing the power of Raspberry Pi. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 1560,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p116",
        "title": "Real-time Zero Trust Architecture Architecture for Ransomware Detection",
        "description": "An innovative approach to ransomware detection designed specifically for BTech students, architected with Zero Trust Architecture.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1550,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p117",
        "title": "Django & React-based E-Commerce Platform",
        "description": "A cutting-edge implementation of E-Commerce Platform utilizing the power of Django & React. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Web",
        "price": 2740,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p118",
        "title": "Advanced Ethereum Architecture for Smart Contract Audit Tool",
        "description": "A cutting-edge implementation of Smart Contract Audit Tool utilizing the power of Ethereum. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 2030,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p119",
        "title": "Intelligent Hyperledger Fabric Architecture for Smart Contract Audit Tool",
        "description": "An innovative approach to smart contract audit tool designed specifically for BTech students, architected with Hyperledger Fabric.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1690,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p120",
        "title": "Scalable Real-time Collaboration Tool using Next.js & Supabase",
        "description": "This project demonstrates scalable concepts in Web by building a robust Real-time Collaboration Tool with Next.js & Supabase.",
        "degree": "MTech",
        "domain": "Web",
        "price": 2880,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p121",
        "title": "Event Management System via React & Node.js",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Event Management System system using React & Node.js.",
        "degree": "MTech",
        "domain": "Web",
        "price": 4070,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p122",
        "title": "Real-time Smart Agriculture using ESP32",
        "description": "An innovative approach to smart agriculture designed specifically for BTech students, architected with ESP32.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2070,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p123",
        "title": "Cutting-edge Online Learning Management System using Microservices",
        "description": "This project demonstrates cutting-edge concepts in Web by building a robust Online Learning Management System with Microservices.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1980,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p124",
        "title": "NLP-based Sentiment Analysis",
        "description": "A cutting-edge implementation of Sentiment Analysis utilizing the power of NLP. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 2340,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p125",
        "title": "Cutting-edge Network Forensics Architecture for Network Traffic Analyzer",
        "description": "This project demonstrates cutting-edge concepts in Cybersecurity by building a robust Network Traffic Analyzer with Network Forensics.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2460,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p126",
        "title": "Cutting-edge Web3.js Architecture for NFT Marketplace",
        "description": "This project demonstrates cutting-edge concepts in Blockchain by building a robust NFT Marketplace with Web3.js.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1440,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p127",
        "title": "Advanced Arduino Architecture for Smart Home Automation",
        "description": "A cutting-edge implementation of Smart Home Automation utilizing the power of Arduino. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2370,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p128",
        "title": "Reinforcement Learning-based Autonomous Navigation",
        "description": "A cutting-edge implementation of Autonomous Navigation utilizing the power of Reinforcement Learning. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 4010,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p129",
        "title": "IPFS-based Decentralized File Storage",
        "description": "A cutting-edge implementation of Decentralized File Storage utilizing the power of IPFS. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 2690,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p130",
        "title": "Zero Trust Architecture-based Vulnerability Scanner",
        "description": "An innovative approach to vulnerability scanner designed specifically for BTech students, architected with Zero Trust Architecture.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2220,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p131",
        "title": "Telemedicine Portal via Django & React",
        "description": "This project demonstrates secure concepts in Web by building a robust Telemedicine Portal with Django & React.",
        "degree": "BTech",
        "domain": "Web",
        "price": 1700,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p132",
        "title": "Automated Decentralized Identity Verification using Ethereum",
        "description": "An innovative approach to decentralized identity verification designed specifically for BTech students, architected with Ethereum.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1320,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p133",
        "title": "Cutting-edge Zero Trust Architecture Architecture for Vulnerability Scanner",
        "description": "Explore the intersection of modern engineering and Cybersecurity through this comprehensive Vulnerability Scanner system using Zero Trust Architecture.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 2350,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p134",
        "title": "Automated Blockchain-based Authentication using Zero Trust Architecture",
        "description": "An innovative approach to blockchain-based authentication designed specifically for MTech students, architected with Zero Trust Architecture.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 4540,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p135",
        "title": "Secure Smart Home Automation using LoRaWAN",
        "description": "Explore the intersection of modern engineering and IoT through this comprehensive Smart Home Automation system using LoRaWAN.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2130,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p136",
        "title": "Real-time Smart Contract Audit Tool using Solidity",
        "description": "A cutting-edge implementation of Smart Contract Audit Tool utilizing the power of Solidity. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 2930,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p137",
        "title": "Network Forensics-based Phishing Email Classifier",
        "description": "An innovative approach to phishing email classifier designed specifically for MTech students, architected with Network Forensics.",
        "degree": "MTech",
        "domain": "Cybersecurity",
        "price": 4570,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p138",
        "title": "Secure Transformers Architecture for Predictive Maintenance",
        "description": "This project demonstrates secure concepts in AI/ML by building a robust Predictive Maintenance with Transformers.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 4290,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p139",
        "title": "NLP-based Autonomous Navigation",
        "description": "An innovative approach to autonomous navigation designed specifically for BTech students, architected with NLP.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 2050,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p140",
        "title": "Advanced Zero Trust Architecture Architecture for Secure Password Vault",
        "description": "An innovative approach to secure password vault designed specifically for BTech students, architected with Zero Trust Architecture.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1580,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p141",
        "title": "Distributed Supply Chain Provenance using Hyperledger Fabric",
        "description": "An innovative approach to supply chain provenance designed specifically for MTech students, architected with Hyperledger Fabric.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 2740,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p142",
        "title": "Smart Home Automation via ESP32",
        "description": "An innovative approach to smart home automation designed specifically for MTech students, architected with ESP32.",
        "degree": "MTech",
        "domain": "IoT",
        "price": 3920,
        "features": [
            "Microcontroller Code",
            "Hardware Schematics",
            "Cloud Backend",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p143",
        "title": "Next.js & Supabase-based Event Management System",
        "description": "Explore the intersection of modern engineering and Web through this comprehensive Event Management System system using Next.js & Supabase.",
        "degree": "MTech",
        "domain": "Web",
        "price": 3590,
        "features": [
            "Full Stack Source Code",
            "Database Schema",
            "Installation Guide",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p144",
        "title": "Real-time Autonomous Navigation using Computer Vision",
        "description": "Explore the intersection of modern engineering and AI/ML through this comprehensive Autonomous Navigation system using Computer Vision.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 3460,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p145",
        "title": "Distributed Smart Contract Audit Tool using IPFS",
        "description": "This project demonstrates distributed concepts in Blockchain by building a robust Smart Contract Audit Tool with IPFS.",
        "degree": "BTech",
        "domain": "Blockchain",
        "price": 1710,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p146",
        "title": "Automated Phishing Email Classifier using Network Forensics",
        "description": "Explore the intersection of modern engineering and Cybersecurity through this comprehensive Phishing Email Classifier system using Network Forensics.",
        "degree": "BTech",
        "domain": "Cybersecurity",
        "price": 1800,
        "features": [
            "Analysis Scripts",
            "Security Audit Report",
            "Implementation Code",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p147",
        "title": "Automated Hyperledger Fabric Architecture for NFT Marketplace",
        "description": "An innovative approach to nft marketplace designed specifically for MTech students, architected with Hyperledger Fabric.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 2930,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p148",
        "title": "Intelligent Disease Prediction using Federated Learning",
        "description": "Explore the intersection of modern engineering and AI/ML through this comprehensive Disease Prediction system using Federated Learning.",
        "degree": "MTech",
        "domain": "AI/ML",
        "price": 4190,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p149",
        "title": "Smart Chatbot via Deep Learning",
        "description": "A cutting-edge implementation of Smart Chatbot utilizing the power of Deep Learning. Ideal for final year engineering students.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 2280,
        "features": [
            "Python Scripts",
            "Jupyter Notebooks",
            "Pre-trained Models",
            "Dataset",
            "Project Report",
            "PPT Presentation"
        ]
    },
    {
        "id": "p150",
        "title": "Hyperledger Fabric-based Decentralized Identity Verification",
        "description": "A cutting-edge implementation of Decentralized Identity Verification utilizing the power of Hyperledger Fabric. Ideal for final year engineering students.",
        "degree": "MTech",
        "domain": "Blockchain",
        "price": 2570,
        "features": [
            "Smart Contracts",
            "Frontend DApp",
            "Testnet Deployment Scripts",
            "Project Report",
            "PPT Presentation"
        ]
    }
];