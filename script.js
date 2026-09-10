// =========================
// SUPABASE
// =========================

const SUPABASE_URL =
    "https://wulupxzgwlwjjbomonsm.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_XJRSnItd3LEIQlMzjKWwsw_bCXoN6G1";

let supabaseClient = null;

if (window.supabase) {
    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
}


// =========================
// OLD STUDENTS
// =========================

let students = {

    khun: {
        id: "khun",
        name: "Khun Htike Aung",
        graduation: "2024",
        school: "St. Michael School",
        photo: "photos/student1.jpg",
        about: "A former student of St. Michael School.",
        memories: "Many unforgettable memories at school.",
        message: "Keeping the memories alive."
    },

    than: {
        id: "than",
        name: "Than Ling Aung",
        graduation: "2024",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "A former student of St. Michael School.",
        memories: "Good memories with friends.",
        message: "Friends and memories forever."
    },

    htet: {
        id: "htet",
        name: "Htet Wai Yan Soe",
        graduation: "2026",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "A former student of St. Michael School.",
        memories: "Memories that will never be forgotten.",
        message: "Thank you, St. Michael."
    },

    nyi: {
        id: "nyi",
        name: "Nyi Nyi Naing",
        graduation: "2026",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "",
        memories: "",
        message: ""
    },

    khaung: {
        id: "khaung",
        name: "Khaung Min Htet",
        graduation: "2026",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "",
        memories: "",
        message: ""
    },

    po: {
        id: "po",
        name: "Po Lay No",
        graduation: "2026",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "",
        memories: "",
        message: ""
    },

    david: {
        id: "david",
        name: "Khun David",
        graduation: "2026",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "",
        memories: "",
        message: ""
    },

    waiyan: {
        id: "waiyan",
        name: "Wai Yan Htun",
        graduation: "2026",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "",
        memories: "",
        message: ""
    },

    christine: {
        id: "christine",
        name: "Christine",
        graduation: "2026",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "A former student of St. Michael School.",
        memories: "",
        message: "ကျမ ရည်းစားလိုချင်ခဲ့တယ်။"
    },

    Let: {
        id: "Let",
        name: "Let Let Soe",
        graduation: "2026",
        school: "St. Michael School",
        photo: "photos/student3.jpg",
        about: "Hello! ငါကတော့ Let Let Soe ပါ။ ချစ်စနိုးနဲ့ သက်သက်/လက်လက် လို့လည်း ခေါ်ကြပါတယ်။ ပျော်ပျော်နေတတ်ပြီး မုန့်စားရတာနဲ့ သူငယ်ချင်းတွေနဲ့ စကားစမြည်ပြောရတာကို အကြိုက်ဆုံးပါပဲ။",
        memories: "ကျောင်းတော်ကြီးမှာ ကုန်ဆုံးခဲ့ရတဲ့ အချိန်တွေက ငါ့ဘဝရဲ့ အမှတ်တရပေါင်းများစွာနဲ့ အလှပဆုံးသော နေ့ရက်တွေပါပဲ။ စာမေးပွဲနီးမှ ကူးရတဲ့ စာတွေ၊ စာသင်ခန်းထဲက ရယ်မောသံတွေနဲ့ သူငယ်ချင်းတွေနဲ့အတူ မုန့်စားဆင်းချိန် တိုးဝှေ့ခဲ့ကြတာတွေကို ဘယ်တော့မှ မေ့မှာမဟုတ်တော့ပါဘူး။",
        message: "ငါတို့အားလုံး ကိုယ့်လမ်းကိုယ်လျှောက်ကြတော့မယ့်အချိန်မှာ ဘယ်နေရာပဲရောက်ရောက် အမြဲတမ်း အောင်မြင်ထွန်းကားကြပါစေလို့ ဆုတောင်းပေးပါတယ်။ သံယောဇဉ်စိမ်းစိမ်းလေးနဲ့ ခင်ခဲ့ရတဲ့ အမှတ်တရတွေကို အမြဲတမ်း သိမ်းထားတော့မှာပါ။ အမြဲတမ်း အဆက်အသွယ်မပြတ်ကြကြေးနော်!"
    }

};


// =========================
// VARIABLES
// =========================

const studentsSection =
    document.getElementById("students");

const searchInput =
    document.getElementById("search");

const yearFilter =
    document.getElementById("yearFilter");

const studentCount =
    document.getElementById("studentCount");

// All students currently displayed
let allStudents = Object.values(students);


// =========================
// SHOW STUDENTS
// =========================

function showStudents(studentList) {

    if (!studentsSection) {
        return;
    }

    studentsSection.innerHTML = "";

    const list =
        Array.isArray(studentList)
            ? studentList
            : Object.values(studentList);

    if (studentCount) {
        studentCount.textContent = list.length;
    }

    list.forEach(function(student) {

        const id =
            student.id || student.name;

        const card =
            document.createElement("a");

        card.href =
            "profile.html?id=" +
            encodeURIComponent(id);

        card.className =
            "student-link";

        card.innerHTML = `
            <div class="student-card">

                <img
                    src="${student.photo || "photos/student3.jpg"}"
                    alt="${student.name || "Student"}"
                >

                <h2>
                    ${student.name || "Unnamed Student"}
                </h2>

                <p>
                    Graduation: ${student.graduation || ""}
                </p>

            </div>
        `;

        studentsSection.appendChild(card);

    });
}


// =========================
// LOAD STUDENTS FROM SUPABASE
// =========================

async function loadStudents() {

    if (!supabaseClient) {

        console.log(
            "Supabase is not connected."
        );

        allStudents =
            Object.values(students);

        showStudents(allStudents);

        return;
    }

    try {

        const { data, error } =
            await supabaseClient
                .from("students")
                .select("*");

        if (error) {

            console.error(
                "Supabase error:",
                error
            );

            allStudents =
                Object.values(students);

            showStudents(allStudents);

            return;
        }

        if (data && data.length > 0) {

            // Database students
            allStudents = data;

            showStudents(allStudents);

            console.log(
                "Supabase students loaded:",
                data
            );

        } else {

            // Static students
            allStudents =
                Object.values(students);

            showStudents(allStudents);

        }

    } catch (error) {

        console.error(
            "Database loading error:",
            error
        );

        allStudents =
            Object.values(students);

        showStudents(allStudents);
    }
}


// =========================
// SEARCH + YEAR FILTER
// =========================

function filterStudents() {

    if (!searchInput || !yearFilter) {
        return;
    }

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    const selectedYear =
        yearFilter.value;

    const filteredStudents =
        allStudents.filter(function(student) {

            const name =
                String(
                    student.name || ""
                ).toLowerCase();

            const graduation =
                String(
                    student.graduation || ""
                );

            const nameMatch =
                name.includes(searchText);

            const yearMatch =
                selectedYear === "" ||
                graduation ===
                String(selectedYear);

            return nameMatch && yearMatch;
        });

    showStudents(filteredStudents);
}


// =========================
// EVENTS
// =========================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterStudents
    );

}

if (yearFilter) {

    yearFilter.addEventListener(
        "change",
        filterStudents
    );

}


// =========================
// START
// =========================

// Show static students first
showStudents(students);

// Then load database students
loadStudents();
