import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { QuestionsComponent } from './pages/admin/questions/questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    CategoryComponent,
    AddCategoryComponent,
    ViewQuizComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    QuestionsComponent,
    AddQuestionComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
   MatInputModule,
   MatFormFieldModule,
   FormsModule,
   HttpClientModule,
   MatSnackBarModule,
   MatCardModule,
   MatToolbarModule,
   MatIconModule,
   MatListModule,
   MatTableModule,
   MatSlideToggleModule,
   MatSelectModule,
   MatRadioModule,
   MatProgressSpinnerModule,
   NgxUiLoaderModule,
   NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
