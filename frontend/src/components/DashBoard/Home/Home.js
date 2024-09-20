import React, { useState, useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//toast.configure();
import { Document, Packer, Paragraph, TextRun, Table, WidthType } from "docx";
import { saveAs } from 'file-saver';

const Home = () => {
  const token = localStorage.getItem('token');
  // console.log('token', token);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [user, setUser] = useState('');
  const [numevents, setNumEvents] = useState('10');

  useEffect(() => {
    axios
      .get(`${baseUrl}auth/update/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log('user data=', res.data);
        setUser(res.data);
        // console.log('user', user);
      })
      .catch((err) => {
        console.log('error=', err);
      });

    axios
      .get(`${baseUrl}teams/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log("numevents data=",res.data);
        setNumEvents(res.data.length);
        // console.log('numevents',numevents);
      })
      .catch((err) => {
        console.log('error=', err);
        if (err.response.status === 404) {
          setNumEvents(0);
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const a = user['email'];
  // console.log('a=', a);
  localStorage.setItem('College_Rep', a);
  function saveDocumentToFile(doc, fileName) {
    const packer = new Packer();
    const mimeType =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    packer.toBlob(doc).then(blob => {
      const docblob = blob.slice(0, blob.size, mimeType);
      saveAs(docblob, fileName);
    });
  }

  const handleDownload = () => {
    axios.get(`${baseUrl}teams/contingent/form`, {
      responseType: 'blob',
      headers: {
        Authorization: `Token ${token}`,
        'Accept': 'application/json'
      }
    })
      .then(async (response) => {
        const data = JSON.parse(await response.data.text());
        const doc = new Document();
        doc.addParagraph((new Paragraph()).addRun((new TextRun("SPARDHA'24")).bold()).spacing({ line: 300 }).title().center());
        doc.addParagraph((new Paragraph()).addRun((new TextRun("DETAILED ENTRY FORM")).size(30)).center());
        doc.addParagraph((new Paragraph()).addRun((new TextRun(`Name of college: ${data.institution_name}`)).size(24)).spacing({ line: 480 }).center());

        const initialHeadings = [
          ['Total No. of Participants', `Female: ${data.num_of_girls}`, `Male: ${data.num_of_girls}`],
          ['No. of officials', `Faculty Members: ${data.num_of_faculty_members}`, `Coaches & PTI: ${data.num_of_coaches_pti}`, `Supporting Staff: ${data.num_of_faculty_members}`],
          ['Arrival of the Team:', 'Date:', 'Train/ Flight No.:', 'PNR nos. (If via Train):'],
          ['Departure of the Team:', 'Train/ Flight No.:', 'PNR nos. (If via Train):'],
        ];

        let i = 1;
        initialHeadings.forEach((tupl) => {
          doc.addParagraph((new Paragraph()).addRun((new TextRun(`${i}. ${tupl[0]}`)).size(26).bold()).spacing({ line: 300, before: 300 }));
          tupl.slice(1).forEach((text) => {
            doc.addParagraph((new Paragraph()).addRun((new TextRun(text)).size(24)));
          });
          i++;
        });

        const contactInfo = ["Sports Officer", "Sports Secretary"];
        doc.addParagraph((new Paragraph()).addRun((new TextRun(`${i}. Contact Information of Contingent Leaders:`)).size(26).bold()).spacing({ line: 300, before: 300 }));
        i++;

        contactInfo.forEach((heading) => {
          doc.addParagraph((new Paragraph()).addRun((new TextRun(`\t${i}) ${heading}:`)).size(24)));
          doc.addParagraph((new Paragraph()).addRun((new TextRun('\tName:')).size(24)));
          doc.addParagraph((new Paragraph()).addRun((new TextRun('\tPh No.:')).size(24)).spacing({ line: 300 }));
          i++;
        });

        doc.addParagraph((new Paragraph()).addRun((new TextRun('Kindly return the Performa, duly completed in all respect, and send it by email at:')).size(24)).spacing({ before: 480 }));
        doc.addParagraph((new Paragraph()).addRun((new TextRun('Email: convener.spardha@iitbhu.ac.in')).size(24).bold()));
        doc.addParagraph((new Paragraph()).addRun((new TextRun('Also, you have to bring 2 hardcopies of this form which should be completely filled and duly signed by dean/director of your college at the time of registration.')).size(24)).spacing({ after: 1300, before: 300 }));

        doc.addParagraph((new Paragraph()).addRun((new TextRun('Signature with Seal')).size(24)).spacing({ before: 1000, after: 240, line: 480 }).right());

        doc.addParagraph((new Paragraph()).addRun((new TextRun('Note: Name of the Participants to be given in full and in block letters.')).bold().size(24)).spacing({ after: 360, before: 240 }));



        data.games.forEach((game) => {
          const gameType = game.game_type === 'G' ? 'Women' : game.game_type === 'B' ? 'Men' : 'Mixed';
          doc.addParagraph((new Paragraph()).addRun((new TextRun(`${game.game_name.toUpperCase()} (${gameType})`).bold()).size(28)).spacing({ after: 480 }));

          const table = new Table(game.players.length + 1, 2, [2000, 6000]);
          table.setWidth(WidthType.DXA, 8000)
          table.getCell(0, 0).addContent((new Paragraph('S.No.')).spacing({ before: 240, after: 240 }).center());
          table.getCell(0, 1).addContent(new Paragraph('Name Of the Player').spacing({ before: 200, after: 200 }).center());

          game.players.forEach((player, row) => {
            const cell1 = table.getCell(row + 1, 0)
            const cell2 = table.getCell(row + 1, 1)
            cell1.addContent((new Paragraph((row + 1).toString())).spacing({ before: 200, after: 200 }).center());
            cell2.addContent((new Paragraph(player)).spacing({ before: 200, after: 200 }).center());
          });

          doc.addTable(table);

          doc.addParagraph((new Paragraph()).addRun((new TextRun(`Captain Name: ${game.captain_name}     Email ID: ________________________`))).spacing({ before: 360 }));
          doc.addParagraph((new Paragraph()).addRun((new TextRun(`Ph.no. : ${game.captain_phone}`))).spacing({ before: 360 }));

          doc.addParagraph((new Paragraph()).addRun((new TextRun(`Vice-Captain Name: _________________________ Email ID: ________________________`))).spacing({ before: 360 }));
          doc.addParagraph((new Paragraph()).addRun((new TextRun(`Ph.no.:  ______________________`))).spacing({ before: 360, after: 480 }));
          doc.addParagraph((new Paragraph()).addRun((new TextRun('Signature with Seal')).size(24)).spacing({ before: 2000, after: 120, line: 480 }).right());
        });

        saveDocumentToFile(doc, "Spardha24_detailed_entryform.docx");


      })
      .catch((error) => {
        console.error('Error downloading document:', error);
      });
  }

  return (
    <div className="user-dashboard">
      <h1>Hello, <username className='username'>{user.name}</username></h1>
      <div className='home_scroller'>
        <div className="row_dbHome">
          <div className="col-xs-10 gutter widthAdjust">
            <div className="welcome-text">
              <div className="text-justify">
                <h2>Note:</h2>
                <h3>
                  Since we allow only college registration, so you're
                  supposed to register for {user.institution}. In case you want
                  someone else to register for your college, you need to first
                  delete your account in User Profile section, before another user can create an account with same
                  college name.
                  < u className='linkButton' style={{ textDecoration: 'none' }}>
                    <Link
                      to="/dashboard/profile"
                      style={{ textDecoration: 'none' }}
                    ><button className="register">
                        User Profile</button>
                    </Link></u>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-xs-10 gutter widthAdjust">
            <div className="welcome-text">
              <div className="text-justify">
                <h3>
                  Please read the Rule Book before registering for events.
                </h3>
                <u className='linkButton' style={{ textDecoration: 'none' }}>
                  <a
                    href="/pdf/RuleBook.pdf"
                    style={{ textDecoration: 'none' }}
                  ><butoon className="register">
                      View RuleBook</butoon>
                  </a>
                </u>
              </div>
            </div>
          </div>
          <div className="col-xs-10 gutter widthAdjust">
            <div className="welcome-text">
              <div className="text-justify">
                <h3>
                  You've registered for <u className='num'>{numevents} </u>events.
                </h3>
                <u className='linkButton' style={{ textDecoration: 'none' }}>
                  <Link
                    to="/dashboard/registration"
                    style={{ textDecoration: 'none' }}
                  ><button className="register">
                      Add/Edit Events</button>
                  </Link>
                </u>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btnform download" onClick={handleDownload}>Download&nbsp;Entry&nbsp;Form</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
