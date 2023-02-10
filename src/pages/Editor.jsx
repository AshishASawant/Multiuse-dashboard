import React from "react";
import { Header } from "../components";
import { HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar } from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-2 md:md-10 mt-24 p-2 md:p10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData/>
        <Inject services={[HtmlEditor,Toolbar,Image,Link,QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
