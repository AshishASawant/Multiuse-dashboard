import React from "react";
import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const ColorPicker = () => {

  const change=(val)=>{
    document.getElementById('preview').style.backgroundColor=val.currentValue.hex
  }

  return (
    <div className="m-4 md:m-10 mt-24 p-5 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" className="dark:bg-main-dark-bg"/>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-gray-200">Inline Pallete</p>
            <ColorPickerComponent
            id="inline-pallete"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-gray-200">Inline Picker</p>
            <ColorPickerComponent
            id="inline-pallete"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
