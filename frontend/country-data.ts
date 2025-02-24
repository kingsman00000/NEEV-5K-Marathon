export const countries = [
  { code: "IN", name: "India", phone: "+91", flag: "🇮🇳" },
  { code: "US", name: "United States", phone: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", phone: "+44", flag: "🇬🇧" },
  { code: "CA", name: "Canada", phone: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", phone: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", phone: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", phone: "+33", flag: "🇫🇷" },
  { code: "IT", name: "Italy", phone: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", phone: "+34", flag: "🇪🇸" },
  { code: "JP", name: "Japan", phone: "+81", flag: "🇯🇵" },
] as const

export const indianStates = [
  {
    code: "AN",
    name: "Andaman and Nicobar Islands",
    cities: ["Port Blair", "Havelock Island", "Neil Island", "Diglipur", "Car Nicobar", "Rangat", "Mayabunder", "Little Andaman"],
  },
  {
    code: "AP",
    name: "Andhra Pradesh",
    cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kadapa", "Rajahmundry", "Tirupati", "Anantapur", "Eluru", "Srikakulam", "Chittoor", "Ongole", "Machilipatnam", "Vizianagaram", "Adoni", "Tenali", "Hindupur", "Madanapalle", "Bhimavaram", "Gudivada", "Nandyal", "Proddatur", "Tadipatri", "Kakinada", "Amaravati"],
  },
  {
    code: "AR",
    name: "Arunachal Pradesh",
    cities: ["Itanagar", "Naharlagun", "Pasighat", "Ziro", "Tawang", "Bomdila", "Roing", "Aalo", "Tezu", "Daporijo", "Seppa", "Changlang", "Khonsa", "Yingkiong"],
  },
  {
    code: "AS",
    name: "Assam",
    cities: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tezpur", "Tinsukia", "Bongaigaon", "Karimganj", "Goalpara", "Sivasagar", "Barpeta", "Dhubri", "Diphu", "Haflong", "Lakhimpur", "Morigaon", "North Lakhimpur"],
  },
  {
    code: "BR",
    name: "Bihar",
    cities: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Begusarai", "Purnia", "Chapra", "Munger", "Arrah", "Samastipur", "Sasaram", "Motihari", "Sitamarhi", "Siwan", "Bettiah", "Katihar", "Kishanganj", "Buxar", "Jehanabad"],
  },
  {
    code: "CH",
    name: "Chandigarh",
    cities: ["Chandigarh", "Manimajra", "Daria", "Maloya", "Dhanas", "Burail", "Hallomajra"],
  },
  {
    code: "CG",
    name: "Chhattisgarh",
    cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon", "Jagdalpur", "Raigarh", "Ambikapur", "Dhamtari", "Mahasamund", "Kanker", "Jashpur", "Baikunthpur", "Dantewada", "Kondagaon", "Bemetara"],
  },
  {
    code: "DL",
    name: "Delhi",
    cities: ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Dwarka", "Rohini", "Laxmi Nagar", "Pitampura", "Vasant Kunj", "Connaught Place", "Karol Bagh", "Saket", "Mayur Vihar"],
  },
  {
    code: "GA",
    name: "Goa",
    cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Calangute", "Candolim", "Baga", "Anjuna", "Colva", "Canacona", "Sanguem", "Curchorem", "Bicholim"],
  },
  {
    code: "GJ",
    name: "Gujarat",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar", "Jamnagar", "Junagadh", "Anand", "Navsari", "Bharuch", "Porbandar", "Morbi", "Mehsana", "Surendranagar"],
  },
  {
    code: "HR",
    name: "Haryana",
    cities: ["Gurugram", "Faridabad", "Chandigarh", "Panipat", "Ambala", "Karnal", "Rohtak", "Hisar", "Sonipat", "Yamunanagar", "Bhiwani", "Rewari", "Sirsa"],
  },
  {
    code: "HP",
    name: "Himachal Pradesh",
    cities: ["Shimla", "Manali", "Dharamshala", "Kullu", "Mandi", "Solan", "Chamba", "Una", "Bilaspur", "Kangra", "Hamirpur"],
  },
  {
    code: "JK",
    name: "Jammu and Kashmir",
    cities: ["Srinagar", "Jammu", "Leh", "Gulmarg", "Pahalgam", "Anantnag", "Baramulla", "Pulwama", "Kupwara", "Udhampur"],
  },
  {
    code: "JH",
    name: "Jharkhand",
    cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Ramgarh", "Dumka", "Chaibasa"],
  },
  {
    code: "KA",
    name: "Karnataka",
    cities: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi", "Gulbarga", "Davanagere", "Shivamogga", "Tumakuru", "Ballari", "Bidar", "Chikkamagaluru", "Kolar"],
  },
  {
    code: "KL",
    name: "Kerala",
    cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur", "Kollam", "Alappuzha", "Palakkad", "Malappuram", "Kottayam"],
  },
  {
    code: "MP",
    name: "Madhya Pradesh",
    cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Satna", "Ratlam", "Rewa", "Chhindwara", "Shivpuri", "Vidisha", "Dewas", "Sehore", "Betul"],
  },
  {
    code: "MH",
    name: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Nanded", "Satara", "Sangli", "Jalgaon", "Akola", "Latur", "Chandrapur"],
  },
  {
    code: "MN",
    name: "Manipur",
    cities: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul", "Senapati"],
  },
  {
    code: "ML",
    name: "Meghalaya",
    cities: ["Shillong", "Tura", "Jowai", "Nongpoh", "Baghmara"],
  },
  {
    code: "MZ",
    name: "Mizoram",
    cities: ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
  },
  {
    code: "NL",
    name: "Nagaland",
    cities: ["Kohima", "Dimapur", "Mokokchung", "Wokha", "Tuensang"],
  },
  {
    code: "OR",
    name: "Odisha",
    cities: ["Bhubaneswar", "Cuttack", "Puri", "Rourkela", "Sambalpur", "Berhampur", "Balasore", "Baripada", "Jeypore", "Jharsuguda"],
  },
  {
    code: "PY",
    name: "Puducherry",
    cities: ["Puducherry", "Karaikal", "Mahe", "Yanam", "Oulgaret", "Ariyankuppam", "Nellithope", "Murungapakkam"],
  },
  {
    code: "PB",
    name: "Punjab",
    cities: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Pathankot", "Hoshiarpur", "Moga", "Firozpur", "Sangrur", "Barnala", "Mansa"],
  },
  {
    code: "RJ",
    name: "Rajasthan",
    cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Sikar", "Bhilwara", "Pali"],
  },
  {
    code: "SK",
    name: "Sikkim",
    cities: ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Ravangla", "Pelling", "Lachung", "Yuksom", "Zuluk", "Soreng"],
  },
  {
    code: "TN",
    name: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Erode", "Tirunelveli", "Vellore", "Thoothukudi", "Dindigul"],
  },
  {
    code: "TG",
    name: "Telangana",
    cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar", "Adilabad"],
  },
  {
    code: "TR",
    name: "Tripura",
    cities: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Ambassa", "Belonia", "Khowai", "Santirbazar"],
  },
  {
    code: "UP",
    name: "Uttar Pradesh",
    cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Prayagraj", "Meerut", "Ghaziabad", "Noida", "Gorakhpur", "Aligarh", "Bareilly", "Moradabad", "Saharanpur", "Firozabad", "Jhansi"],
  },
  {
    code: "UK",
    name: "Uttarakhand",
    cities: ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Almora", "Haldwani", "Mussoorie", "Pithoragarh"],
  },
  {
    code: "WB",
    name: "West Bengal",
    cities: ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol", "Malda", "Kharagpur", "Haldia", "Bardhaman", "Cooch Behar", "Raiganj", "Krishnanagar", "Jalpaiguri", "Darjeeling", "Midnapore", "Serampore", "Bally", "Chandannagar", "Bhatpara", "Baranagar"],
  },
] as const

