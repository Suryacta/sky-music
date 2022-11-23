import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import getAlbumData from "../api/album";

export const fetchAlbumData:
|AsyncThunk<any, void, Record<string, never>>
| any = createAsyncThunk("albumData", getAlbumData);
interface AlbumDataProps {
  "im:name": {
    label: string;
};
"im:image": {
  label: string;
  attributes: {
      height: string;
  };
}[];
"im:itemCount": {
  label: string;
};
"im:price": {
  label: string;
  attributes: {
      amount: string;
      currency: string;
  };
};
"im:contentType": {
  "im:contentType": {
      attributes: {
          term: string;
          label: string;
      };
  };
  attributes: {
      term: string;
      label: string;
  };
};
"im:artist": {
  label: string;
  attributes: {
      href: string;
  };
};
"im:releaseDate": {
  label: string;
  attributes: {
      label: string;
  };
};
rights: {
  label: string;
};
title: {
  label: string;
};
link: {
  attributes: {
      rel: string;
      type: string;
      href: string;
  };
};
id: {
  label: string;
  attributes: {
      "im:id": string;
  };
};
category: {
  attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
  };
};

}
interface AlbumEntryProps {
  payload: object,
  feed: object,
  entry: AlbumDataProps[];
}
interface AlbumProps {
  loading: boolean,
  album: AlbumEntryProps | any,
  error: object,
}
const initialState : AlbumProps = {
  loading: false,
  album: {
    entry: [
      {
        "im:name": { label: "" },
        "im:image": [
          {
            label: "",
            attributes: { height: "" },
          },
          {
            label: "",
            attributes: { height: "" },
          },
          {
            label: "",
            attributes: { height: "" },
          },
        ],
        "im:itemCount": { label: "" },
        "im:price": {
          label: "",
          attributes: { amount: "", currency: "" },
        },
        "im:contentType": {
          "im:contentType": {
            attributes: { term: "", label: "" },
          },
          attributes: { term: "", label: "" },
        },
        rights: {
          label: "",
        },
        title: { label: "" },
        link: {
          attributes: {
            rel: "",
            type: "",
            href: "",
          },
        },
        id: {
          label: "",
          attributes: { "im:id": "" },
        },
        "im:artist": {
          label: "",
          attributes: {
            href: "",
          },
        },
        category: {
          attributes: {
            "im:id": "",
            term: "",
            scheme: "",
            label: "",
          },
        },
        "im:releaseDate": {
          label: "",
          attributes: { label: "" },
        },
      },
    ],

  },
  error: {},
};
const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    albums: (state, { payload }) => {
      state.album = payload;
    },
  },
  extraReducers: {
    [fetchAlbumData.pending]: (state) => {
      state.loading = true;
    },
    [fetchAlbumData.fulfilled]: (state, payload) => {
      return { ...state, album: payload, loading: false };
    },
    [fetchAlbumData.rejected]: (state, err) => {
      state.loading = false;
      state.error = err.error;
    },
  },
});
export const albumActions = albumSlice.actions;
export default albumSlice.reducer;
