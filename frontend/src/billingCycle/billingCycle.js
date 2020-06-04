import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'

class BillingCycle extends Component {

  render(){
    return (
      <div>
        <ContentHeader title='Ciclos de pagamento' small='cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar'  icon='bars'    target='tabList'  />
              <TabHeader label='Incluir' icon='plus'    target='tabCreate'/>
              <TabHeader label='Alterar' icon='pencil'  target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='Excluir'   />
            </TabsHeader>
            <TabsContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle