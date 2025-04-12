import { auth, db, logoutUser } from "./firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("✅ User authenticated:", user.email);

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();
            const firstName = userData.firstName || "User";

            document.querySelectorAll("#userName").forEach(element => {
                element.innerText = firstName;
            });
        } else {
            console.warn("⚠️ User data not found in Firestore.");
        }
    } else {
        console.log("🔸 No user is logged in.");
    }
});
