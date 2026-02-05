/**
 * Global AN Plant Data - Absolute Full Data (60 Lines)
 * Verified for 2026 BI Dashboard Project
 */
const data_an = [
    /* --- CIS & BALTIC --- */
    {"region": "CIS", "country": "BELARUS", "company": "JSC Polymir", "location": "Novopolotsk", "capacity": 86, "lat": 55.53, "lng": 28.65, "status": "Normal"},
    {"region": "CIS", "country": "RUSSIA", "company": "Saratovorgsyntez", "location": "Saratov", "capacity": 170, "lat": 51.53, "lng": 46.03, "status": "Normal"},
    
    /* --- INDIAN SUBCONTINENT --- */
    {"region": "INDIAN SUB.", "country": "INDIA", "company": "Reliance Industries", "location": "Vadodara", "capacity": 41, "lat": 22.30, "lng": 73.18, "status": "Normal"},
    
    /* --- MIDDLE EAST --- */
    {"region": "MIDDLE EAST", "country": "TURKEY", "company": "Petkim Petrokimya", "location": "Aliaga", "capacity": 90, "lat": 38.83, "lng": 26.97, "status": "Normal"},
    
    /* --- NORTH AMERICA --- */
    {"region": "NORTH AMERICA", "country": "UNITED STATES", "company": "Ascend Performance L1", "location": "Alvin", "capacity": 330, "lat": 29.42, "lng": -95.24, "status": "Normal"},
    {"region": "NORTH AMERICA", "country": "UNITED STATES", "company": "Ascend Performance L2", "location": "Alvin", "capacity": 319, "lat": 29.43, "lng": -95.25, "status": "Normal"},
    {"region": "NORTH AMERICA", "country": "UNITED STATES", "company": "INEOS Nitriles USA", "location": "Green Lake", "capacity": 545, "lat": 28.51, "lng": -96.79, "status": "Maintenance (Future)", "days": 30, "period": "Q1 2026", "reason": "Heavy Maintenance"},
    {"region": "NORTH AMERICA", "country": "UNITED STATES", "company": "INEOS Nitriles USA", "location": "Lima", "capacity": 190, "lat": 40.74, "lng": -84.11, "status": "Normal"},
    
    /* --- NEA: CHINA (MAINLAND) - 33 Lines --- */
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "CNOOC Dongfang", "location": "Dongfang", "capacity": 200, "lat": 19.10, "lng": 108.65, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Daqing Petrochem", "location": "Daqing", "capacity": 80, "lat": 46.59, "lng": 125.12, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "INEOS SINOPEC Tianjin", "location": "Binhai", "capacity": 130, "lat": 38.98, "lng": 117.76, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Jiangsu Sailboat L1", "location": "Lianyungang", "capacity": 260, "lat": 34.75, "lng": 119.34, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Jiangsu Sailboat L2", "location": "Lianyungang", "capacity": 260, "lat": 34.76, "lng": 119.35, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Jiangsu Sailboat L3", "location": "Lianyungang", "capacity": 260, "lat": 34.77, "lng": 119.36, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Jiangsu Sailboat L4", "location": "Lianyungang", "capacity": 260, "lat": 34.78, "lng": 119.37, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Liaoning Kingfa", "location": "Panjin", "capacity": 260, "lat": 41.12, "lng": 122.07, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Lihuayi Lijin", "location": "Dongying", "capacity": 260, "lat": 37.46, "lng": 118.49, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "PetroChina Daqing", "location": "Daqing", "capacity": 80, "lat": 46.60, "lng": 125.13, "status": "Trouble (Current)", "days": 10, "period": "Jan 28 ~ Feb", "reason": "Short-term Inspection"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "PetroChina Fushun", "location": "Fushun", "capacity": 92, "lat": 41.88, "lng": 123.95, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "PetroChina Jilin", "location": "Jieyang", "capacity": 130, "lat": 23.55, "lng": 116.36, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "PetroChina Jilin L1", "location": "Jilin City", "capacity": 106, "lat": 43.85, "lng": 126.55, "status": "Shutdown (Current)", "days": 365, "period": "Since Apr 2025", "reason": "Long-term Shutdown"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "PetroChina Jilin L2", "location": "Jilin City", "capacity": 106, "lat": 43.86, "lng": 126.56, "status": "Shutdown (Current)", "days": 365, "period": "Since Oct 2025", "reason": "Weak Margin"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "PetroChina Jilin L3", "location": "Jilin City", "capacity": 260, "lat": 43.87, "lng": 126.57, "status": "Maintenance (Current)", "days": 30, "period": "Jan 23 ~ Feb", "reason": "Jan Turnaround"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "PetroChina Jilin L4", "location": "Jilin City", "capacity": 240, "lat": 43.88, "lng": 126.58, "status": "Maintenance (Current)", "days": 30, "period": "Jan 23 ~ Feb", "reason": "Jan Turnaround"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "PetroChina Lanzhou", "location": "Lanzhou", "capacity": 31, "lat": 36.06, "lng": 103.83, "status": "Maintenance (Future)", "days": 15, "period": "May 15 ~ May 30", "reason": "Facility Upgrade"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Shandong Haili", "location": "Zibo", "capacity": 130, "lat": 36.81, "lng": 118.05, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Shandong Keluer L1", "location": "Dongying", "capacity": 130, "lat": 37.47, "lng": 118.50, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Shandong Keluer L2", "location": "Dongying", "capacity": 130, "lat": 37.48, "lng": 118.51, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Shandong Yulong L1", "location": "Yantai", "capacity": 130, "lat": 37.55, "lng": 121.35, "status": "Shutdown (Current)", "days": 15, "period": "Jan 22 ~ Feb", "reason": "Internal Adjustment"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Shandong Yulong L2", "location": "Yantai", "capacity": 98, "lat": 37.56, "lng": 121.36, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Shanghai SECCO L1", "location": "Jinshan", "capacity": 260, "lat": 30.74, "lng": 121.34, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Shanghai SECCO L2", "location": "Jinshan", "capacity": 260, "lat": 30.75, "lng": 121.35, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Sinochem Quanzhou", "location": "Quanzhou", "capacity": 260, "lat": 25.01, "lng": 118.68, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Sinopec Anqing L1", "location": "Anqing", "capacity": 80, "lat": 30.51, "lng": 117.05, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Sinopec Anqing L2", "location": "Anqing", "capacity": 130, "lat": 30.52, "lng": 117.06, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Sinopec ZRCC", "location": "Ningbo", "capacity": 400, "lat": 29.87, "lng": 121.55, "status": "Maintenance (Future)", "days": 20, "period": "Mar 10 ~ Mar 30", "reason": "Scheduled Maintenance"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Tianchen Qixiang", "location": "Zibo", "capacity": 130, "lat": 36.82, "lng": 118.06, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Zhejiang Petrochem L1", "location": "Zhoushan", "capacity": 260, "lat": 30.00, "lng": 122.10, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Zhejiang Petrochem L2", "location": "Zhoushan", "capacity": 263, "lat": 30.01, "lng": 122.11, "status": "Normal"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Sinopec Yangzi", "location": "Nanjing", "capacity": 180, "lat": 32.22, "lng": 118.82, "status": "Maintenance (Current)", "days": 60, "period": "Jan 20 ~ Mar", "reason": "Cracker-linked Turnaround"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Sinopec Maoming", "location": "Maoming", "capacity": 80, "lat": 21.66, "lng": 110.92, "status": "Shutdown (Current)", "days": 20, "period": "Jan 20 ~ Feb", "reason": "Feedstock Issue"},
    {"region": "NEA", "country": "CHINA (MAINLAND)", "company": "Zhongan Lianhe", "location": "Huainan", "capacity": 200, "lat": 32.78, "lng": 116.82, "status": "Maintenance (Future)", "days": 44, "period": "Mar 16 ~ Apr 29", "reason": "Maintenance Cycle"},
    
    /* --- NEA: JAPAN (4 Lines) --- */
    {"region": "NEA", "country": "JAPAN", "company": "Asahi Kasei Corp", "location": "Mizushima", "capacity": 200, "lat": 34.54, "lng": 133.74, "status": "Normal"},
    {"region": "NEA", "country": "JAPAN", "company": "Mitsubishi Chemical", "location": "Kurashiki", "capacity": 115, "lat": 34.58, "lng": 133.77, "status": "Normal"},
    {"region": "NEA", "country": "JAPAN", "company": "Resonac Holdings", "location": "Kawasaki", "capacity": 60, "lat": 35.53, "lng": 139.70, "status": "Normal"},
    {"region": "NEA", "country": "JAPAN", "company": "Sumitomo Chemical", "location": "Niihama", "capacity": 60, "lat": 33.96, "lng": 133.28, "status": "Normal"},
    
    /* --- NEA: KOREA, NORTH --- */
    {"region": "NEA", "country": "KOREA, NORTH", "company": "North Korean Gov", "location": "Pyongyang", "capacity": 10, "lat": 39.03, "lng": 125.75, "status": "Normal"},
    
    /* --- NEA: KOREA, SOUTH (3 Lines) --- */
    {"region": "NEA", "country": "KOREA, SOUTH", "company": "Taekwang Industrial", "location": "Ulsan", "capacity": 290, "lat": 35.54, "lng": 129.31, "status": "Normal"},
    {"region": "NEA", "country": "KOREA, SOUTH", "company": "Tongsuh Petrochem L1", "location": "Ulsan", "capacity": 266, "lat": 35.55, "lng": 129.32, "status": "Maintenance (Future)", "days": 30, "period": "Q2/Q3 2026", "reason": "Maintenance Mulling"},
    {"region": "NEA", "country": "KOREA, SOUTH", "company": "Tongsuh Petrochem L2", "location": "Ulsan", "capacity": 266, "lat": 35.56, "lng": 129.33, "status": "Maintenance (Future)", "days": 30, "period": "Q2/Q3 2026", "reason": "Maintenance Mulling"},
    
    /* --- NEA: TAIWAN (4 Lines) --- */
    {"region": "NEA", "country": "TAIWAN", "company": "CPDC Line 1", "location": "Ta-She", "capacity": 110, "lat": 22.73, "lng": 120.35, "status": "Shutdown (Current)", "days": 365, "period": "Since Oct 2025", "reason": "Production Cut"},
    {"region": "NEA", "country": "TAIWAN", "company": "CPDC Line 2", "location": "Ta-She", "capacity": 120, "lat": 22.74, "lng": 120.36, "status": "Maintenance (Future)", "days": 40, "period": "Late October", "reason": "Planned Maintenance"},
    {"region": "NEA", "country": "TAIWAN", "company": "Formosa Plastics L1", "location": "Mailiao", "capacity": 140, "lat": 23.80, "lng": 120.20, "status": "Maintenance (Future)", "days": 40, "period": "Mar 15 ~ Apr 25", "reason": "Major Turnaround"},
    {"region": "NEA", "country": "TAIWAN", "company": "Formosa Plastics L2", "location": "Mailiao", "capacity": 140, "lat": 23.81, "lng": 120.21, "status": "Maintenance (Future)", "days": 40, "period": "Mar 15 ~ Apr 25", "reason": "Major Turnaround"},
    
    /* --- SOUTH AMERICA --- */
    {"region": "SOUTH AMERICA", "country": "BRAZIL", "company": "Acrilonitrila Nordeste", "location": "Camacari", "capacity": 100, "lat": -12.70, "lng": -38.32, "status": "Normal"},
    
    /* --- WESTERN EUROPE (4 Lines) --- */
    {"region": "WESTERN EUROPE", "country": "GERMANY", "company": "INEOS Koeln L1", "location": "Dormagen", "capacity": 220, "lat": 51.10, "lng": 6.84, "status": "Normal"},
    {"region": "WESTERN EUROPE", "country": "GERMANY", "company": "INEOS Koeln L2", "location": "Dormagen", "capacity": 100, "lat": 51.11, "lng": 6.85, "status": "Normal"},
    {"region": "WESTERN EUROPE", "country": "NETHERLANDS", "company": "AnQore L1", "location": "Geleen", "capacity": 135, "lat": 50.97, "lng": 5.83, "status": "Normal"},
    {"region": "WESTERN EUROPE", "country": "NETHERLANDS", "company": "AnQore L2", "location": "Geleen", "capacity": 150, "lat": 50.98, "lng": 5.84, "status": "Normal"},

    /* --- SEA --- */
    {"region": "SEA", "country": "SINGAPORE", "company": "ExxonMobil", "location": "Jurong", "capacity": 130, "lat": 1.27, "lng": 103.72, "status": "Maintenance (Future)", "days": 365, "period": "From Mar 31", "reason": "Permanent Closure"}
];
