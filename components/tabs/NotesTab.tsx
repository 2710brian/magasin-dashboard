"use client";

import {
  useEffect,
  useState,
} from "react";

type NotesTabProps = {
  ad: any;
};

export default function NotesTab({
  ad,
}: NotesTabProps) {

  const [
    notes,
    setNotes,
  ] = useState<any[]>([]);

  const [
    newNote,
    setNewNote,
  ] = useState("");

  async function loadNotes() {

    try {

      const response =
        await fetch(
          `/api/get-notes?clientid=${ad.id}`
        );

      const data =
        await response.json();

      if (
        data.success
      ) {

        setNotes(
          data.notes
        );
      }

    } catch (error) {

      console.error(
        error
      );
    }
  }

  async function addNote() {

    if (
      !newNote.trim()
    ) {
      return;
    }

    try {

      const response =
        await fetch(
          "/api/add-note",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              {
                clientid:
                  ad.id,

                note:
                  newNote,
              }
            ),
          }
        );

      const data =
        await response.json();

      if (
        data.success
      ) {

        setNewNote("");

        loadNotes();
      }

    } catch (error) {

      console.error(
        error
      );
    }
  }

  useEffect(() => {

    if (ad.id) {

      loadNotes();
    }

  }, [ad.id]);

  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "1.2fr 0.8fr",

        gap: "24px",
      }}
    >
      {/* LEFT */}

      <div>

        <div
          style={{
            fontSize: "18px",

            fontWeight: "bold",

            marginBottom:
              "18px",
          }}
        >
          Interne noter
        </div>

        {/* NEW NOTE */}

        <div
          style={{
            marginBottom:
              "24px",
          }}
        >
          <textarea
            value={
              newNote
            }

            onChange={(
              e
            ) =>
              setNewNote(
                e.target
                  .value
              )
            }

            placeholder="Skriv ny note..."

            style={{
              width: "100%",

              minHeight:
                "140px",

              background:
                "#f5f5f5",

              border:
                "1px solid #dcdcdc",

              borderRadius:
                "12px",

              padding:
                "18px",

              fontSize:
                "15px",

              resize:
                "vertical",

              boxSizing:
                "border-box",

              marginBottom:
                "14px",
            }}
          />

          <button
            onClick={
              addNote
            }

            style={{
              background:
                "#111",

              color:
                "white",

              border:
                "none",

              padding:
                "12px 18px",

              borderRadius:
                "10px",

              cursor:
                "pointer",
            }}
          >
            Tilføj note
          </button>
        </div>

        {/* NOTES */}

        <div
          style={{
            display:
              "flex",

            flexDirection:
              "column",

            gap: "16px",
          }}
        >
          {notes.map(
            (note) => (

              <div
                key={
                  note.id
                }

                style={{
                  background:
                    "#fafafa",

                  border:
                    "1px solid #ddd",

                  borderRadius:
                    "12px",

                  padding:
                    "18px",
                }}
              >
                <div
                  style={{
                    fontSize:
                      "13px",

                    color:
                      "#666",

                    marginBottom:
                      "10px",
                  }}
                >
                  {
                    note.createdby
                  }
                  {" • "}
                  {new Date(
                    note.createdat
                  ).toLocaleString()}
                </div>

                <div
                  style={{
                    whiteSpace:
                      "pre-wrap",

                    lineHeight:
                      1.6,
                  }}
                >
                  {note.note}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* RIGHT */}

      <div>

        <div
          style={{
            fontSize: "18px",

            fontWeight: "bold",

            marginBottom:
              "18px",
          }}
        >
          Materialer &
          dokumenter
        </div>

        <UploadCard
          title="Artikel materiale"
        />

        <UploadCard
          title="Word / PDF"
        />

        <UploadCard
          title="Billeder"
        />

        <UploadCard
          title="Kundemateriale"
        />
      </div>
    </div>
  );
}

function UploadCard({
  title,
}: any) {
  return (
    <div
      style={{
        background:
          "#fafafa",

        border:
          "2px dashed #ccc",

        borderRadius:
          "12px",

        padding:
          "18px",

        marginBottom:
          "18px",
      }}
    >
      <div
        style={{
          fontWeight:
            "bold",

          marginBottom:
            "12px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          height: "80px",

          background:
            "#f1f1f1",

          borderRadius:
            "10px",

          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          marginBottom:
            "12px",

          color:
            "#777",
        }}
      >
        Ingen filer endnu
      </div>

      <button
        style={{
          background:
            "#111",

          color:
            "white",

          border:
            "none",

          padding:
            "10px 14px",

          borderRadius:
            "10px",

          cursor:
            "pointer",
        }}
      >
        Upload fil
      </button>
    </div>
  );
}
