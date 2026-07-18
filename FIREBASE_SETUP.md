# Firebase Setup Guide for EMIP

Because the **Education Migration Intelligence Platform (EMIP)** relies on Firebase for user authentication and database storage, you must configure your Firebase project correctly in the Google Cloud / Firebase console. 

Follow these steps to ensure everything works smoothly:

## 1. Enable Authentication (Email/Password)

If you see the error `auth/configuration-not-found`, you need to enable the sign-in provider.

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project (e.g., `emip-b4d28`).
3. In the left-hand menu, click **Authentication**.
4. Click **Get Started** (if you haven't already).
5. Navigate to the **Sign-in method** tab.
6. Click on **Email/Password** under "Sign-in providers".
7. Toggle the **Enable** switch to the ON position. *(Do not enable the "Email link (passwordless sign-in)" switch unless you specifically want that feature).*
8. Click **Save**.

## 2. Initialize Firestore Database

If you see a `PERMISSION_DENIED` error when trying to run the database seed script, it means your database doesn't exist yet!

1. In the Firebase Console, look at the left-hand menu and click **Firestore Database**.
2. Click the **Create database** button.
3. You will be prompted to set up security rules. Since you chose **Start in production mode**, all reads and writes are denied by default. 
   > **Note:** Because production mode denies all access, our `seed.mjs` script will fail to inject data unless we temporarily open the rules or use a Service Account. For now, go to the **Rules** tab in Firestore and change `allow read, write: if false;` to `allow read, write: if true;` and click **Publish**. (We will secure this properly before launching).
4. Choose a location for your database (the default is usually fine, or pick a region close to India like `asia-south1`).
5. Click **Enable**.

## 3. Verify Environment Variables

Your Next.js app needs the correct keys to talk to your Firebase project. Ensure you have a file named `.env.local` in the root of your project (`d:\Project\EMIP\.env.local`) that looks like this:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=emip-b4d28.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=emip-b4d28
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=emip-b4d28.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 4. Seed the Database

Once Firestore is enabled in Test Mode, you can populate it with the dummy student data required for the charts:

1. Open your terminal in the project root (`d:\Project\EMIP`).
2. Run the seeding script:
   ```bash
   node scripts/seed.mjs
   ```
3. You should see a success message as the 50 dummy student records are injected into the database!

4. **Secure Your Database!** Once the seed script is finished, Firebase will warn you that your rules are public. You must immediately lock them down so nobody can delete your data.
   Go back to the **Rules** tab in Firestore and replace the rules with this secure block:

   ```text
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         // Public portal can read data for the charts
         allow read: if true;
         // ONLY logged-in Admins can modify or delete data
         allow write: if request.auth != null;
       }
     }
   }
   ```
   Click **Publish**. Your data is now perfectly secure!
