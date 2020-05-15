import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './FluentuiDetailListWebPartWebPart.module.scss';
import * as strings from 'FluentuiDetailListWebPartWebPartStrings';

import {DetailsListAdvancedExample} from '../../examples/DetailsList.Advanced.Example';

export interface IFluentuiDetailListWebPartWebPartProps {
  description: string;
}

export default class FluentuiDetailListWebPartWebPart extends BaseClientSideWebPart<IFluentuiDetailListWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement = React.createElement(DetailsListAdvancedExample);

    ReactDom.render(element, this.domElement);

    // this.domElement.innerHTML = `
    // <div>
    //   <div class="${ styles.container }">
    //     <div class="${ styles.row }">
    //       <div class="${ styles.column }">
    //         <span class="${ styles.title }">Welcome to SharePoint!</span>
    //         <p class="${ styles.subTitle }">Customize SharePoint experiences using web parts.</p>
    //         <p class="${ styles.description }">${escape(this.properties.description)}</p>
    //         <a href="https://aka.ms/spfx" class="${ styles.button }">
    //           <span class="${ styles.label }">Learn more</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>`;    
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
