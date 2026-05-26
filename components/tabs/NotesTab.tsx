"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  compactButtonStyle,
  compactCardStyle,
  compactTextareaStyle,
} from "../styles/compactStyles";

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

        gap: "14px",
      }}
    >
      {/* LEFT */}

      <div>

        <div
          style={{
            fontSize: "14px",

            fontWeight: "bold",

            marginBottom:
              "10px",
          }}
        >
          Interne noter
        </div>

        <div
          style={{
            marginBottom:
              "12px",
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
              ...compactTextareaStyle,

              minHeight:
                "90px",

              marginBottom:
                "10px",
            }}
          />

          <button
            onClick={
              addNote
            }

            style={
              compactButtonStyle
            }
          >
            Tilføj note
          </button>
        </div>

        <div
          style={{
            display:
              "flex",

            flexDirection:
              "column",

            gap: "10px",
          }}
        >
          {notes.map(
            (note) => (

              <div
                key={
                  note.id
                }

                style={
                  compactCardStyle
                }
              >
                <div
                  style={{
                    fontSize:
                      "11px",

                    color:
                      "#666",

                    marginBottom:
                      "6px",
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
                      1.4,

                    fontSize:
                      "13px",
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
            fontSize: "14px",

            fontWeight: "bold",

            marginBottom:
              "10px",
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
        ...compactCardStyle,

        marginBottom:
          "10px",

        border:
          "1px dashed #ccc",
      }}
    >
      <div
        style={{
          fontWeight:
            "bold",

          marginBottom:
            "8px",

          fontSize:
            "13px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          height: "54px",

          background:
            "#f1f1f1",

          borderRadius:
            "8px",

          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          marginBottom:
            "8px",

          color:
            "#777",

          fontSize:
            "12px",
        }}
      >
        Ingen filer endnu
      </div>

      <button
        style={
          compactButtonStyle
        }
      >
        Upload fil
      </button>
    </div>
  );
}
