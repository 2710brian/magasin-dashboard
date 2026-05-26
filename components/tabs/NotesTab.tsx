"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  compactButtonStyle,
  compactCardStyle,
  compactLabelStyle,
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

        set
