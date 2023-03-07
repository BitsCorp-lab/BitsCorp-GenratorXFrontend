import AppLayout from "../../Layout/AppLayout";
import "./Docs.css";

const Docs = () => {
  const forwardArrow = ">";
  const left = "{"
  const right = "}"
  const collectionSchema = `${left}email: "", name: "" ${right}`
  return (
    <AppLayout>
      <div className="docsCon">
        <p>After Downloading the application follow these steps</p>
        <p>
          Create Firebase Account &nbsp; {forwardArrow} &nbsp;Create New Project
          &nbsp;{forwardArrow}&nbsp; Go To Console
        </p>
        <p>
          In Sidebar Next To Project Overview There Is Setting Icon &nbsp; {forwardArrow} &nbsp;Click On That
          &nbsp;{forwardArrow}&nbsp; Goto Service Account And Generate New Private Key
        </p>
        <p>
          Copy That Key And Paste It In FirebaseCredentials.json File &nbsp; {forwardArrow} &nbsp;Save The Changes
        </p>
        <p>
          Goto Firebase Console &nbsp; {forwardArrow} &nbsp;Click On Firestore
          &nbsp;{forwardArrow}&nbsp; Create The Collections With Same Name You Specify Earlier While Generating Application
        </p>
        <p>
          After Creating Collections &nbsp; {forwardArrow} &nbsp;Create Document With Id "RootCollectionData"
          &nbsp;{forwardArrow}&nbsp; Inside RootCollectionData Create Two Fields 1.collectionName: "" 2.collectionSchema:  
        </p>
        <p>Type Of Collection Schema Will Be Map &nbsp; {forwardArrow} &nbsp; And In This You Will SpeciFy Fields Of Table</p>
        <p>{collectionSchema} &nbsp; {forwardArrow} &nbsp; The Value Of Fields Should Be Empty String</p>
        <p>Now The App Will Be Up And Running And You Can Make Chnages According To Your Needs</p>
        <p className="appDec">GenratorX Prototype Developed By BitsCorp</p>
        <p className="contact">Contact: sahil.rao132000@gmail.com</p>
      </div>
    </AppLayout>
  );
};

export default Docs;
