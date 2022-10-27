import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { QuestionsComponent } from './pages/admin/questions/questions.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: DashboardComponent, canActivate: [AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"category",
        component:CategoryComponent
      },
      {
        path:"add-category",
        component:AddCategoryComponent
      },
      {
        path:"quizzes",
        component:ViewQuizComponent
      },
      {
        path:"add-quiz",
        component:AddQuizComponent
      },
      {
        path:"quiz/:qid",
        component:UpdateQuizComponent
      },
      {
        path:"quiz/question/:qid/:title",
        component:QuestionsComponent
      },
      {
        path:"quiz/add-question/:qid/:title",
        component:AddQuestionComponent
      }
    ]
  },
  { path: "user-dashboard", component: UserDashboardComponent, canActivate: [UserGuard],
    children:[
      {
        path:':cid',
        component:LoadQuizComponent
      },
      {
        path:'instruction/:qid',
        component:InstructionComponent
      }
    ]
  },
  {
    path:'start/:qid',
    component:StartComponent,
    canActivate:[UserGuard]
  },
  
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
